import { Column } from 'typeorm';
import { UserDefault } from 'types/user-default';

export class UserInfo implements UserDefault {

  @Column({type: 'varchar', nullable: false})
  firstName: string;

  @Column({type: 'varchar', nullable: false})
  lastName: string;

  @Column({type: 'varchar', nullable: false})
  email: string;

  @Column({type: 'varchar', nullable: false})
  password: string;

  @Column({type: 'varchar', nullable: false})
  city: string;

  @Column({type: 'varchar', nullable: false})
  zipCode: string;

}