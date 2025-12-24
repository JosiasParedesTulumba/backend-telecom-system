import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

import { Product } from "./product.entity";
import { Warehouse } from "src/warehouses/entities/warehouse.entity";

@Entity('product_almacen')
export class ProductAlmacen {

    @PrimaryColumn()
    product_id: number;

    @PrimaryColumn({ name: 'almacen_id' })
    almacen_id: number;

    @Column({ default: 0 })
    stock: number;

    @ManyToOne(() => Product, product => product.almacenes)
    @JoinColumn({ name: 'product_id' })
    product: Product;

    @ManyToOne(() => Warehouse)
    @JoinColumn({ name: 'almacen_id' })
    almacen: Warehouse;
}