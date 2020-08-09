import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CardTypes } from './card-types.entity';


@Entity()
export class Card {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => CardTypes, card_types => card_types.id)
  card_type: number;
}

