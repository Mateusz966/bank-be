import { Controller, Post, Body } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { FundAccountReq } from 'types/transaction';


@Controller('transactions')
export class TransactionsController {

  constructor(
    private readonly transactionsService: TransactionsService,
  ) {}

  @Post('/fund-account')
  async fundAccount(@Body() fund: FundAccountReq) {
    const { id, amount } = fund;
    try {
      await this.transactionsService.fund({id, amount})
    } catch (e) {
      throw e;
    }
  };

}
