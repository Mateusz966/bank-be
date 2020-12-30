import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Client } from '../../clients/client.entity';
import { Account } from './account.entity';

@Entity()
export class ClientAccounts {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Client, client => client)
  client: Client

  @ManyToOne(() => Account, account => account)
  account: Account;

  @Column({type: 'float', default: 0})
  balance: number;
}
