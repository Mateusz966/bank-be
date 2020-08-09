import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class CardTypes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'varchar'})
  card_name: string;

  @Column({type: 'float'})
  annual_interest: number;
}

