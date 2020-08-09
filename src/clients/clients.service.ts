import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Client } from './client.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClientsService {
  constructor (
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) { }

  async findUser(email: string): Promise<any> {
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

  async saveUser(user: any) {
    try {
      await this.clientRepository.insert(user);
      return user;
    } catch (error) {
      console.error(error);
    }
  }

}
