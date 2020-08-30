import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UserInfo } from '../embedded-entities/user-info.entity';
import { UserDefault } from 'types/user-default';
import { ClientDto } from 'types/client';

@Entity()
export class Client extends ClientDto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column((type) => UserInfo, {prefix: false})
  user: UserInfo

  @Column({type: 'float', nullable: false, default: 0})
  balance: number;
}