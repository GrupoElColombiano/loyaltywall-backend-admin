import { Injectable, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import * as jwksClient from 'jwks-rsa';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private jwtService: JwtService) {
    super();
  }

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromRequest(request);


    if (!token) {
      throw new UnauthorizedException('No token found');
    }

    try {
      // Verify the token using Keycloak's JWKS endpoint
      const payload = await this.verifyTokenWithKeycloak(token);
      request.user = payload; // Attach the payload to the request
      return true;
    } catch (error) {
      throw new UnauthorizedException('Token validation failed');
    }
  }

  // Extract token from the Authorization header
  private extractTokenFromRequest(request): string | null {
    const authHeader = request.headers['authorization'];
    if (!authHeader) return null;
    return authHeader.split(' ')[1]; // Extract token from "Bearer <token>"
  }

  // Verify the token using Keycloak's JWKS endpoint
  private async verifyTokenWithKeycloak(token: string): Promise<any> {
    const client = jwksClient({
      jwksUri: `${process.env.KEYCLOAK_AUTH_SERVER_URL}/realms/${process.env.KEYCLOAK_REALM}/protocol/openid-connect/certs`,
    });

    // Decode the token to get the `kid` (Key ID)
    const decodedToken: any = jwt.decode(token, { complete: true });
    if (!decodedToken || !decodedToken.header || !decodedToken.header.kid) {
      throw new UnauthorizedException('Invalid token');
    }

    const key = await client.getSigningKey(decodedToken.header.kid);
    const signingKey = key.getPublicKey();

    // Verify the token using the retrieved public key
    return new Promise((resolve, reject) => {
      jwt.verify(token, signingKey, { algorithms: ['RS256'] }, (err, decoded) => {
        if (err) {
          reject(new UnauthorizedException('Token validation failed'));
        } else {
          resolve(decoded);
        }
      });
    });
  }
}