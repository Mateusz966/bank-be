import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Client } from '../clients/client.entity';
import { Account } from '../accounts/entitties/account.entity';


@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Client, client => client.id)
  client: number;

  @ManyToOne(type => Account, account => account.id)
  account: number;

  @Column({type: 'float'})
  amount: number;
}

