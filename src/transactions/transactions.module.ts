import { Module } from '@nestjs/common';
import { TransactionsController } from './transactions.controller';
import { TransactionsService } from './transactions.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientAccounts } from '../accounts/entitties/client-accounts.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ClientAccounts])],
  controllers: [TransactionsController],
  providers: [TransactionsService]
})
export class TransactionsModule {}
