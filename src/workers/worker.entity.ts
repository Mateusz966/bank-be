import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UserInfo } from '../embedded-entities/user-info.entity';

@Entity()
export class Worker {
  @PrimaryGeneratedColumn()
  id: number;

  @Column(type => UserInfo)
  worker: UserInfo

  @Column({type: 'varchar', nullable: false})
  password: string;

  @Column({type: 'varchar', nullable: false})
  zipCodeZone: string;

}