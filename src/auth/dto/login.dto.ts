import { IsEmail, IsEmpty } from "class-validator";

export class LoginDto {
    
    @IsEmail()
    correo: string;

    @IsEmpty()
    password: string;
}
