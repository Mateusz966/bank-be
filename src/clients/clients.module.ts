import { Module } from '@nestjs/common';
import { Client } from './client.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsService } from './clients.service';
import { ClientAccounts } from '../accounts/entitties/client-accounts.entity';
import { ClientsController } from './clients.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Client, ClientAccounts])],
  providers: [ClientsService],
  exports: [ClientsService],
  controllers: [ClientsController]
})
export class ClientsModule {}
