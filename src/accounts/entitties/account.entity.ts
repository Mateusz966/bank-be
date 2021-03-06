import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AccountSetting } from './account-setting.entity';
import { Card } from '../../card/entities/card.entity';

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'varchar', nullable: false})
  accountName: string;

  @ManyToOne(type => AccountSetting, account_settings => account_settings.id )
  accountSettings: number;

  @ManyToOne(type => Card, card => card.id, {nullable: true})
  card: number;
}

