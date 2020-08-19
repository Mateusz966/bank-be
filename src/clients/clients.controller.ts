import { Body, Controller, Post } from '@nestjs/common';
import { ClientsService } from './clients.service';



@Controller('clients')
export class ClientsController {
  constructor(
    private readonly clientsService: ClientsService,
  ) {}


  @Post('/create-account')
  async create(@Body() data) {
    try {
      const { userId, accountId } = data;
      await this.clientsService.createClientAccount(userId, accountId);
    } catch (e) {
      throw e;
    }
  }
}
