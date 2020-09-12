import { IsEmail, IsPostalCode, IsString } from "class-validator";
import { UserDefault } from "./user-default";

export class WorkerDto implements WorkerReq {

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

    @IsPostalCode('PL')
    zipCodeZone: string;
}

export interface WorkerReq extends UserDefault {
    zipCodeZone: string;
  };