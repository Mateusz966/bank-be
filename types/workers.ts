import { IsEmail, IsPostalCode, IsString } from "class-validator";
import { UserDefault } from "./user-default";

export class WorkerDto implements WorkerReq {

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

    @IsPostalCode('PL')
    zipCodeZone: string;
}

export interface WorkerReq extends UserDefault {
    zipCodeZone: string;
  };