import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AccountTypes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'varchar', nullable: false})
  account_name: string;

  @Column({type: 'int', nullable: false})
  account_setting_id
}
