import { Controller, Get, Post, Req ,UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('auth/sign-in')
  async login(@Req() req) {
    return this.authService.login(req.user);
  }
};
