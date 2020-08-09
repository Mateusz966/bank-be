import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AccountSetting {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'int', nullable: false})
  payments_until_free: number;

  @Column({type: 'boolean', nullable: false})
  physical_card: boolean;
}
