import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsModule } from './clients/clients.module';
import { Client } from './clients/client.entity';
import { AccountsModule } from './accounts/accounts.module';
import { Account } from './accounts/entitties/account.entity';
import { AccountSetting } from './accounts/entitties/account-setting.entity';
import { CardsModule } from './card/cards.module';
import { Card } from './card/entities/card.entity';
import { CardTypes } from './card/entities/card-types.entity';
import { TransactionsModule } from './transactions/transactions.module';
import { Transaction } from './transactions/transaction.entity';
import { AuthModule } from './auth/auth.module';
import { ClientAccounts } from './accounts/entitties/client-accounts.entity';
import { WorkersModule } from './workers/workers.module';
import { ZipCodeModule } from './zip-code/zip-code.module';
import { Worker } from './workers/entities/worker.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '1234',
    database: 'bank',
    entities: [Client, Account, AccountSetting, Card, CardTypes, Transaction, ClientAccounts, Worker],
    synchronize: true,
      logging: true,
  }),
    TypeOrmModule.forFeature([Client]),
    ClientsModule,
    AccountsModule,
    CardsModule,
    TransactionsModule,
    AuthModule,
    WorkersModule,
    ZipCodeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
