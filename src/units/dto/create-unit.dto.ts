import { IsNotEmpty, IsString, Length, Matches } from "class-validator";

export class CreateUnitDto {

    @IsString()
    @IsNotEmpty()
    @Length(2, 3)
    @Matches(/^[A-Z]+$/, {
        message: 'El código debe estar en mayúsculas (ej: UN, KG, MT)',
    })
    codigo: string;
    
    @IsString()
    @IsNotEmpty()
    @Length(3, 50)
    nombre: string;
}
