import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AccountSetting } from './account-setting.entity';
import { Card } from '../../card/entities/card.entity';

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'float', nullable: false})
  balance: number;

  @ManyToOne(type => AccountSetting, account_settings => account_settings.id )
  account_settings: number;

  @ManyToOne(type => Card, card => card.id)
  card: number;
}

