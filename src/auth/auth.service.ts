import {
  Injectable, NotFoundException,
} from '@nestjs/common';
import { RegisterlogService } from 'src/registerlog/registerlog.service';
@Injectable()
export class AuthService {
 constructor(private readonly registerLogService: RegisterlogService){}

 async registerLoginUser(body: any){
  const registerlog: any = {
    "userId": 876,
    "roleId": 6,
    "activityType": "Login",
    "description": "El usuario ha sido logueado.",
    "affectedObject": "Login",
    "success": true,
    "ipAddress": "6585876587658765876",
    "userAgent": "mozilla/5.0",
    "timestamp": "2023-09-13T12:34:56.789Z"
  }

  try {
    const newRegisterLog = await this.registerLogService.create(registerlog);
    return newRegisterLog;
  } catch (error: any) {
    throw new NotFoundException(error.message);
  }
 }

  async registerLogoutUser(body: any){
    const registerlog: any = {
      "userId": 876,
      "roleId": 6,
      "activityType": "Logout",
      "description": "El usuario ha sido deslogueado.",
      "affectedObject": "Logout",
      "success": true,
      "ipAddress": "6585876587658765876",
      "userAgent": "mozilla/5.0",
      "timestamp": "2023-09-13T12:34:56.789Z"
    }

    try {
      const newRegisterLog = await this.registerLogService.create(registerlog);
      return newRegisterLog;
    } catch (error: any) {
      throw new NotFoundException(error.message);
    }
  }
}
