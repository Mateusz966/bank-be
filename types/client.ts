import { IsEmail, IsString } from 'class-validator';


export class ClientDto implements ClientReq {
  @IsString()
  firstName;

  @IsString()
  lastName;

  @IsEmail()
  email;

  @IsString()
  password;

}

export interface ClientReq {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export interface ClientRes {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  balance: number;
};