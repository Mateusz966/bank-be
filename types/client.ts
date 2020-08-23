import { IsEmail, IsNumber, IsString } from 'class-validator';


export class ClientDto implements ClientReq {
  @IsString()
  firstName;

  @IsString()
  lastName;

  @IsEmail()
  email;

  @IsString()
  password;

  @IsNumber()
  balance;

}

export interface ClientReq {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  balance: number;
};

export interface ClientRes {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  balance: number;
};