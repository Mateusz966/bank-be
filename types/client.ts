import { IsEmail, IsNumber, IsString } from 'class-validator';


export class ClientDto implements ClientReq {
  @IsString()
  clientFirstName;

  @IsString()
  clientLastName;

  @IsEmail()
  clientEmail;

  @IsString()
  password;

  @IsNumber()
  balance;

}

export interface ClientReq {
  clientFirstName: string;
  clientLastName: string;
  clientEmail: string;
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