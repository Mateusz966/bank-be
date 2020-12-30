import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('accounts')
export class AccountsController {

  constructor(
    private readonly accountService: AccountsService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post('/new')
  async createAccount(@Body() data) {
    
  };
}
