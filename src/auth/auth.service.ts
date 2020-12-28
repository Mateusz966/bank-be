import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { hash, compare } from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from 'src/clients/client.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { ClientDto, ClientRes } from 'types/client';
import { WorkerRes } from 'types/workers';



@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
    private readonly jwtService: JwtService,
  ) { }

  async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    try {
      const hashedPassword = await hash(password, saltRounds);
      return hashedPassword;
    } catch (error) {
      return error;
    }
  }

  async validateUser(user: ClientDto): Promise<ClientRes | WorkerRes> {
    const { email } = user;
    try {
      const userInDb = await this.clientRepository.findOne({ user: { email } });
      if (userInDb) {
        const isUserValid = await compare(user.password, userInDb.user.password);
        const { password, ...userRes } = userInDb;
        return isUserValid ? userRes : undefined;
      }
    } catch (error) {
      console.log(error);
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async login(user: any) {
    const { id, balance } = user
    const payload = {
      email: user.user.email,
      id,
      firstName: user.user.firstName,
      lastName: user.user.lastName,
      balance
    };
    console.log(user)
    return {
      token: this.jwtService.sign(payload)
    }
  }


}