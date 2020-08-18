import { Controller, Post } from '@nestjs/common';
import { TransactionsService } from './transactions.service';


@Controller('transactions')
export class TransactionsController {

  constructor(
    private readonly transactionsService: TransactionsService,
  ) {}

  @Post('/fund-account')
  async fundAccount() {
    try {

    } catch (e) {
      throw e;
    }
  };

}
