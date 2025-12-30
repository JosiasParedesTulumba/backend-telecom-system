import { Supplier } from "src/suppliers/entities/supplier.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ShoppingItem } from "./shopping_item.entity";

@Entity('compras')
export class Shopping {

    @PrimaryGeneratedColumn()
    compra_id: number;

    @Column({ name: 'serie', length: 10 })
    serie: string;

    @Column({ name: 'numero', length: 20 })
    numero: string;

    @Column({ name: 'fecha', type: 'datetime' })
    fecha: Date;

    @Column({ name: 'proveedor_id' })
    proveedor_id: number;

    @ManyToOne(() => Supplier)
    @JoinColumn({ name: 'proveedor_id' })
    proveedor: Supplier;

    @Column({ name: 'registrado_por', comment: 'Usuario que registró la compra' })
    registrado_por: number;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'registrado_por' })
    registrador: User;

    @Column({ name: 'moneda', length: 3, default: 'PEN', comment: 'PEN, USD' })
    moneda: string;

    @Column({ name: 'subtotal', type: 'decimal', precision: 10, scale: 2 })
    subtotal: number;

    @Column({ name: 'igv', type: 'decimal', precision: 10, scale: 2 })
    igv: number;

    @Column({ name: 'total', type: 'decimal', precision: 10, scale: 2 })
    total: number;

    @Column({ name: 'estado', length: 20, default: 'pendiente', comment: 'pendiente, pagado, anulado' })
    estado: string;

    @Column({ name: 'anulado_por', nullable: true })
    anulado_por: number;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'anulado_por' })
    anulador: User;

    @Column({ name: 'fecha_anulacion', type: 'timestamp', nullable: true })
    fecha_anulacion: Date;

    @OneToMany(() => ShoppingItem, item => item.compra)
    items: ShoppingItem[];

}
