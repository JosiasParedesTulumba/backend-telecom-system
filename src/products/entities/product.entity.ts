import { Unit } from "src/units/entities/unit.entity";
import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductAlmacen } from "./product_almacen.entity";
import { ProductSeries } from "./product-series.entity";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    product_id: number;

    @Column({ name: 'codigo_interno' })
    codigo_interno: string;

    @Column({ name: 'nombre' })
    nombre: string;

    @Column({ name: 'unit_id' })
    unit_id: number;

    @ManyToOne(() => Unit, unit => unit.products)
    @JoinColumn({ name: 'unit_id' })
    unit: Unit;

    @Column({ name: 'precio1', type: 'decimal', precision: 10, scale: 2 })
    precio1: number;

    @Column({ name: 'precio2', type: 'decimal', precision: 10, scale: 2 })
    precio2: number;

    @Column({ name: 'precio3', type: 'decimal', precision: 10, scale: 2, nullable: true })
    precio3: number;

    @Column({ name: 'tiene_igv', default: true })
    tiene_igv: boolean;

    @Column({ name: 'maneja_serie', default: false })
    maneja_serie: boolean;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @Column({ name: 'created_by', nullable: true })
    created_by: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'created_by' })
    creator: User;

    @Column({ name: 'updated_by', nullable: true })
    updated_by: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'updated_by' })
    updater: User;

    @OneToMany(() => ProductAlmacen, pa => pa.product)
    almacenes: ProductAlmacen[];

    @OneToMany(() => ProductSeries, ps => ps.product)
    series: ProductSeries[];
}
