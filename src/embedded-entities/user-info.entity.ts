import { Column } from 'typeorm';

export class UserInfo {

  @Column({type: 'varchar', nullable: false})
  firstName: string;

  @Column({type: 'varchar', nullable: false})
  lastName: string;

  @Column({type: 'varchar', nullable: false})
  email: string;

  @Column({type: 'varchar', nullable: false})
  city: string;

  @Column({type: 'varchar', nullable: false})
  zipCode: string;

}