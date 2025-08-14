import { IsEmail, IsString, Length, Matches } from "class-validator";

export class UserRequest {
    @IsString()
    @Length(2, 50)
    first_name: string;

    @IsString()
    @Length(2, 50)
    last_name: string;

    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    @Matches(/^\+?[0-9]{7,15}$/, { message: 'Phone number is not valid' })
    phone: string;
}