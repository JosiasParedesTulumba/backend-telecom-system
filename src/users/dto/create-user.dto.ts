import { IsEmail, IsNotEmpty, IsString, IsEnum, IsOptional } from "class-validator";
import { UserRole } from "../entities/user.entity";

export class CreateUserDto {

    @IsNotEmpty()
    @IsString()
    nombre: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsOptional()
    @IsEnum(UserRole)
    rol?: UserRole;
}
