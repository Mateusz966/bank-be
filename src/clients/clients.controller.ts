import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UserObj } from '../../decorators/user.descorator';



@Controller('clients')
export class ClientsController {
  constructor(
    private readonly clientsService: ClientsService,
  ) {}
  
  @UseGuards(JwtAuthGuard)
  @Post('/create-account')
  async create(@Body() data, @UserObj() user) {
    try {
      const { userId, accountId } = data;
      await this.clientsService.createClientAccount(userId, accountId);
    } catch (e) {
      throw e;
    }
  }
}
