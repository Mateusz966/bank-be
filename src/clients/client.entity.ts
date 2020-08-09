import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'varchar', nullable: false})
  first_name: string;

  @Column({type: 'varchar', nullable: false})
  last_name: string;

  @Column({type: 'varchar', nullable: false})
  email: string;

  @Column({type: 'float', nullable: false})
  balance: number;
}