import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from './entitties/account.entity';

@Injectable()
export class AccountsService {

  constructor(
    @InjectRepository(Account)
    private readonly accountRepository: Repository<Account>,
  ) {}

  // async create() {
  //   this.accountRepository.createQueryBuilder()
  //     .insert()
  //     .values({

  //     })
  // }

}
