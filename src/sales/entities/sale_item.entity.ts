import { Product } from "src/products/entities/product.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Sale } from "./sale.entity";

@Entity('venta_items')
export class SaleItem {

    @PrimaryGeneratedColumn()
    venta_item_id: number;

    @Column({ name: 'venta_id' })
    venta_id: number;

    @ManyToOne(() => Sale, venta => venta.items, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'venta_id' })
    venta: Sale;

    @Column({ name: 'product_id' })
    product_id: number;

    @ManyToOne(() => Product)
    @JoinColumn({ name: 'product_id' })
    product: Product;

    @Column({ name: 'cantidad', type: 'int' })
    cantidad: number;

    @Column({ name: 'precio_unitario', type: 'decimal', precision: 10, scale: 2 })
    precio_unitario: number;

    @Column({ name: 'descuento', type: 'decimal', precision: 10, scale: 2, default: 0.00 })
    descuento: number;

    @Column({ name: 'subtotal', type: 'decimal', precision: 10, scale: 2 })
    subtotal: number;

    @Column({ name: 'serie', length: 100, nullable: true, comment: 'NULL si producto no maneja serie' })
    serie: string;

}