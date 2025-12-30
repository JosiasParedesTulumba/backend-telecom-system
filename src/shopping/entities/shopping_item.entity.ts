import { Product } from "src/products/entities/product.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Shopping } from "./shopping.entity";

@Entity('compra_items')
export class ShoppingItem {

    @PrimaryGeneratedColumn()
    compra_item_id: number;

    @Column({ name: 'compra_id' })
    compra_id: number;

    @ManyToOne(() => Shopping, compra => compra.items, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'compra_id' })
    compra: Shopping;

    @Column({ name: 'product_id' })
    product_id: number;

    @ManyToOne(() => Product)
    @JoinColumn({ name: 'product_id' })
    product: Product;

    @Column({ name: 'cantidad', type: 'int' })
    cantidad: number;

    @Column({ name: 'precio_unitario', type: 'decimal', precision: 10, scale: 2 })
    precio_unitario: number;

    @Column({ name: 'subtotal', type: 'decimal', precision: 10, scale: 2 })
    subtotal: number;

    @Column({ name: 'serie', length: 100, nullable: true, comment: 'NULL si producto no maneja serie' })
    serie: string;

}