import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, Length } from "class-validator";
import { TipoDocumento } from "../entities/customer.entity";

export class CreateCustomerDto {

    @IsNotEmpty()
    @IsEnum(TipoDocumento)
    tipo_documento: TipoDocumento;

    @IsNotEmpty()
    @IsString()
    @Length(1, 20)
    numero_documento: string;

    @IsNotEmpty()
    @IsString()
    @Length(1, 255)
    nombre: string;

    @IsOptional()
    @IsString()
    @Length(1, 255)
    razon_social?: string;

    @IsOptional()
    @IsString()
    @Length(1, 255)
    direccion?: string;

    @IsOptional()
    @IsString()
    telefono?: string;

    @IsOptional()
    @IsEmail()
    email?: string;

    @IsOptional()
    @IsNumber()
    estado?: number;
}
