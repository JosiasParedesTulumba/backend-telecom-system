import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { Product } from "./product.entity";
import { Warehouse } from "src/warehouses/entities/warehouse.entity";

@Entity('product_series')
export class ProductSeries {

    @PrimaryGeneratedColumn('increment')
    series_id: number;

    @Column({ name: 'product_id' })
    product_id: number;

    @Column({ name: 'almacen_id', nullable: true })
    almacen_id: number;

    @Column({ length: 100 })
    serie: string;

    @Column({ type: 'tinyint', default: 1 })
    estado: number;

    @ManyToOne(() => Product, product => product.series)
    @JoinColumn({ name: 'product_id' })
    product: Product;

    @ManyToOne(() => Warehouse)
    @JoinColumn({ name: 'almacen_id' })
    almacen: Warehouse;
}