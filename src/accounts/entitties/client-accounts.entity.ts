import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Client } from '../../clients/client.entity';
import { Account } from './account.entity';

@Entity()
export class ClientAccounts {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Client, client => client.id)
  client: number

  @ManyToOne(type => Account, account => account.id)
  account: number;

  @Column({type: 'float', default: 0})
  balance: number;
}
