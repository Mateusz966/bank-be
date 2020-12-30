import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Client } from './client.entity';
import { Repository } from 'typeorm';
import { ClientAccounts } from '../accounts/entitties/client-accounts.entity';
import { ClientDto, ClientRes } from '../../types/client';
import { UserInfo } from '../embedded-entities/user-info.entity';
import { Account } from '../accounts/entitties/account.entity';


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
          user: {
            email,
          }
        }
      });
      return user ? user : undefined;
    } catch (error) {
      console.error(error);
    }
  }

  async saveUser(user: ClientDto): Promise<ClientDto> {
    console.log('serv', user);
    try {
      const client = new Client();
      client.user = new UserInfo();
      
      client.balance = user.balance;
      client.user.city = user.city;
      client.user.email = user.email;
      client.user.lastName = user.lastName;
      client.user.firstName = user.firstName;
      client.user.password = user.password;
      client.user.zipCode = user.zipCode;

      return await this.clientRepository.save(client);
    } catch (error) {
      console.error(error);
    }
  }


  async createClientAccount(client: Client, account: Account) {
    console.log(client, account)
    try {
      const clientAccount = new ClientAccounts();
      clientAccount.account = account
      clientAccount.client = client

      return this.clientAccountsRepository.save(clientAccount);

    } catch (e) {
      throw e;
    }
  }

}
