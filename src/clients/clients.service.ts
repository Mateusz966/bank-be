import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Client } from './client.entity';
import { Repository } from 'typeorm';
import { ClientAccounts } from '../accounts/entitties/client-accounts.entity';
import { ClientReq, ClientRes } from '../../types/client';

@Injectable()
export class ClientsService {
  constructor (
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
    @InjectRepository(ClientAccounts)
    private readonly clientAccountsRepository: Repository<ClientAccounts>,
  ) { }

  async findUser(email: string): Promise<ClientRes> {
    try {
      const user = await this.clientRepository.findOne({
        where: {
          email,
        }
      });
      return user ? user : undefined;
    } catch (error) {
      console.error(error);
    }
  }

  async saveUser(user: ClientReq): Promise<ClientReq> {
    try {
      await this.clientRepository.insert(user);
      return user;
    } catch (error) {
      console.error(error);
    }
  }


  async createClientAccount(client: number, account: number) {
    try {
      await this.clientAccountsRepository.save({client, account})
    } catch (e) {
      throw e;
    }
  }

}
