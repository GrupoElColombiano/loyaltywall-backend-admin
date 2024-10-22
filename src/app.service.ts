import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `Backend admin - Version 1.0.2`;
  }
}
