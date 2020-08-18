import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AccountSetting {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'int', nullable: false})
  paymentsUntilFree: number;

  @Column({type: 'boolean', nullable: false})
  physicalCard: boolean;
}
