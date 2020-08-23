import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UserInfo } from '../embedded-entities/user-info.entity';

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column(type => UserInfo)
  client: UserInfo

  @Column({type: 'varchar', nullable: false})
  password: string;

  @Column({type: 'float', nullable: false, default: 0})
  balance: number;
}