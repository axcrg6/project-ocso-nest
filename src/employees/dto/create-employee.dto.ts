import { IsEmail, IsString, MaxLength } from "class-validator";

export class CreateEmployeeDto {
    @IsString()
    @MaxLength(30)
    name: string;
    @IsString()
    @MaxLength(60)
    lastName: string;
    @IsString()
    @MaxLength(10)
    phoneNumber: string;
    @IsString()
    @IsEmail()
    email: string;
}
