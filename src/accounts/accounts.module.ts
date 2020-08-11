import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './entitties/account.entity';
import { AccountsController } from './accounts.controller';
import { AccountsService } from './accounts.service';
import { Client } from '../clients/client.entity';
import { ClientAccounts } from './entitties/client-accounts.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Account, Client, ClientAccounts])],
  controllers: [AccountsController],
  providers: [AccountsService]
})
export class AccountsModule {}
