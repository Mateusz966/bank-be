import { Column } from 'typeorm';

export class UserInfo {

  @Column({type: 'varchar', nullable: false})
  userFirstName: string;

  @Column({type: 'varchar', nullable: false})
  userLastName: string;

  @Column({type: 'varchar', nullable: false})
  userEmail: string;

  @Column({type: 'varchar', nullable: false})
  userPassword: string;

  @Column({type: 'varchar', nullable: false})
  userCity: string;

  @Column({type: 'varchar', nullable: false})
  userZipCode: string;

}