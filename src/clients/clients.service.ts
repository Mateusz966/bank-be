import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Client } from './client.entity';
import { Repository } from 'typeorm';
import { ClientAccounts } from '../accounts/entitties/client-accounts.entity';
import { ClientDto, ClientRes } from '../../types/client';

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

  async saveUser(user: ClientDto): Promise<ClientDto> {
    console.log('serv', user);
    try {
      const client = new Client();
      client.balance = user.balance;
      client.city = user.city;
      client.email = user.email;
      client.lastName = user.lastName;
      client.firstName = user.firstName;
      client.password = user.password;
      client.zipCode = user.zipCode;

      return await this.clientRepository.save(client);
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
