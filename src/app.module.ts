import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsModule } from './clients/clients.module';
import { Client } from './clients/client.entity';
import { AccountsModule } from './accounts/accounts.module';
import { Account } from './accounts/entitties/account.entity';
import { AccountSetting } from './accounts/entitties/account-setting.entity';
import { AccountTypes } from './accounts/entitties/account-types.entity';
import { CardsModule } from './card/cards.module';
import { Card } from './card/entities/card.entity';
import { CardTypes } from './card/entities/card-types.entity';
import { TransactionsModule } from './transactions/transactions.module';
import { Transaction } from './transactions/transaction.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '1234',
    database: 'bank',
    entities: [Client, Account, AccountSetting, AccountTypes, Card, CardTypes, Transaction],
    synchronize: true,
  }),
    ClientsModule,
    AccountsModule,
    CardsModule,
    TransactionsModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
