import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, Length } from "class-validator";
import { TipoDocumento } from "../entities/customer.entity";

export class CreateCustomerDto {

    @IsNotEmpty()
    @IsEnum(TipoDocumento)
    tipo_documento: TipoDocumento;

    @IsNotEmpty()
    @IsNumber()
    numero_documento: number;

    @IsNotEmpty()
    @IsString()
    @Length(1, 255)
    nombre: string;

    @IsNotEmpty()
    @IsString()
    @Length(1, 255)
    razon_social: string;

    @IsNotEmpty()
    @IsString()
    @Length(1, 255)
    direccion: string;

    @IsNotEmpty()
    @IsString()
    telefono: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsOptional()
    @IsNumber()
    estado?: number;
}
