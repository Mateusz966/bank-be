import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ClientAccounts } from '../accounts/entitties/client-accounts.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FundAccountReq } from 'types/transaction';
import { Transaction } from './transaction.entity';

@Injectable()
export class TransactionsService {
  constructor (
    @InjectRepository(ClientAccounts)
    private readonly clientAccountsRepository: Repository<ClientAccounts>,
    @InjectRepository(Transaction)
    private readonly transactionRepository: Repository<Transaction>,
  ) {};

  async fund({accountId, amount}: FundAccountReq) {
    try {
      await this.clientAccountsRepository.update({ id: accountId }, { balance: () => `balance + ${amount}` })
    } catch (e) {
      throw e;
    }
  }
}
