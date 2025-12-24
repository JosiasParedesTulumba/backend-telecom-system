import { Product } from "src/products/entities/product.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Unit {

    @PrimaryGeneratedColumn('increment')
    unit_id: number;

    @Column({
        type: 'char', // UN, KG, LT, SRV
        length: 3,
    })
    codigo: string;

    @Column({
        type: 'varchar',
        length: 50,
    })
    nombre: string;

    @OneToMany(() => Product, product => product.unit)
    products: Product[];
}
