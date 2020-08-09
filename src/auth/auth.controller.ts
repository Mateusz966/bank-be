import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { ClientsService } from 'src/clients/clients.service';
import { AuthService } from './auth.service';



@Controller('auth')
export class AuthController {

  constructor (
    private readonly clientsService: ClientsService,
    private readonly authService: AuthService,
  ) { }

  @Post('sign-up')
  async registerUser(@Body() user: any) {
    console.log(user);
    const { password } = user;
    try {
      const hashedPassword =  await this.authService.hashPassword(password);
      const userToSave = { ...user, password: hashedPassword };
      const savedUser = await this.clientsService.saveUser(userToSave);
      return savedUser;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }


}