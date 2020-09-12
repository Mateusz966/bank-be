import { IsEmail, IsNumber, IsString, IsPostalCode } from 'class-validator';
import { UserDefault} from './user-default';


export class ClientDto implements ClientReq {
  @IsNumber()
  balance;

  @IsString()
  firstName;

  @IsString()
  lastName;

  @IsEmail()
  email;

  @IsString()
  password;

  @IsPostalCode('PL')
  zipCode;

  @IsString()
  city;
}

export interface ClientReq extends UserDefault {
  balance: number;
};

export interface ClientRes {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  balance: number;
};