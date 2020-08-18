import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class CardTypes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'varchar'})
  cardName: string;

  @Column({type: 'float'})
  annualInterest: number;
}

