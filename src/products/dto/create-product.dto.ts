import { IsEmpty, IsString } from "class-validator";

export class CreateProductDto {

    @IsEmpty()
    @IsString()
    product_name: string;
}
