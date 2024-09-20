import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

//Documentation
import { ApiTags } from '@nestjs/swagger';

@ApiTags('AUTH')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: any): Promise<any> {
    return await this.authService.registerLoginUser(body);
  }

  @Post('logout')
  async logout(@Body() body: any): Promise<any> {
    return await this.authService.registerLogoutUser(body);
  }

}
