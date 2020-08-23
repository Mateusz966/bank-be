import { Controller, Post, Body, HttpException, HttpStatus, Get, UseGuards, Req } from '@nestjs/common';
import { ClientsService } from 'src/clients/clients.service';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { ClientDto, ClientReq } from '../../types/client';



@Controller('auth')
export class AuthController {

  constructor (
    private readonly clientsService: ClientsService,
    private readonly authService: AuthService,
  ) { }

  @Post('sign-up')
  async registerUser(@Body() user: ClientDto) {
    const { password } = user;
    try {
      const hashedPassword =  await this.authService.hashPassword(password);
      const userToSave = { ...user, password: hashedPassword };
      await this.clientsService.saveUser(userToSave);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('user')
  async getUserDetails(@Req() request: any) {
    const { email } = request.user;
    return await this.clientsService.findUser(email);
  }
}