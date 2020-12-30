import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { FundAccountReq } from 'types/transaction';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UserObj } from 'decorators/user.descorator';


@Controller('transactions')
export class TransactionsController {

  constructor(
    private readonly transactionsService: TransactionsService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post('/fund-account')
  async fundAccount(@Body() fund: FundAccountReq, @UserObj() user) {
    const { accountId, amount } = fund;
    try {
      await this.transactionsService.fund({accountId, amount})
    } catch (e) {
      throw e;
    }
  };

}
