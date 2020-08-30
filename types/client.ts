import { IsEmail, IsNumber, IsString, IsPostalCode } from 'class-validator';
import { UserDefault} from './user-default';


export class ClientDto implements ClientReq {
  @IsNumber()
  balance;

  @IsString()
  userFirstName;

  @IsString()
  userLastName;

  @IsEmail()
  userEmail;

  @IsString()
  userPassword;

  @IsPostalCode('PL')
  userZipCode;

  @IsString()
  userCity;
}

export interface ClientReq extends UserDefault {
  balance: number;
};

export interface ClientRes {
  id: number;
  userFirstName: string;
  userLastName: string;
  userEmail: string;
  balance: number;
};