import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ClientAccounts } from '../accounts/entitties/client-accounts.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TransactionsService {
  constructor (
    @InjectRepository(ClientAccounts)
    private readonly clientAccountsRepository: Repository<ClientAccounts>,
  ) {};

  async fund(id: string, newFunds: number) {
    try {
    await this.clientAccountsRepository.update(id,{
     balance: newFunds
    });

    } catch (e) {
      throw e;
    }
  }



}
