import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'varchar', nullable: false})
  firstName: string;

  @Column({type: 'varchar', nullable: false})
  lastName: string;

  @Column({type: 'varchar', nullable: false})
  email: string;

  @Column({type: 'varchar', nullable: false})
  password: string;

  @Column({type: 'float', nullable: false, default: 0})
  balance: number;
}