import { Controller, Post, Body } from '@nestjs/common';

import { AuthService } from '../services/auth.service';
import { RegisterDto } from '../dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }
}