import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    product_id: number;

    @Column()
    product_name: string;
    
    precio_uno: number;
    
    precio_dos: number;

    precio_tres: number;

    stock: number;
}
