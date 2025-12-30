import { Customer } from "src/customers/entities/customer.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { SaleItem } from "./sale_item.entity";

@Entity('ventas')
export class Sale {

    @PrimaryGeneratedColumn()
    venta_id: number;

    @Column({ name: 'serie', length: 10 })
    serie: string;

    @Column({ name: 'numero', length: 20 })
    numero: string;

    @Column({ name: 'fecha', type: 'datetime' })
    fecha: Date;

    @Column({ name: 'fecha_vencimiento', type: 'date', nullable: true })
    fecha_vencimiento: Date;

    @Column({ name: 'cliente_id' })
    cliente_id: number;

    @ManyToOne(() => Customer)
    @JoinColumn({ name: 'cliente_id' })
    cliente: Customer;

    @Column({ name: 'vendedor_id', comment: 'Usuario que realizó la venta' })
    vendedor_id: number;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'vendedor_id' })
    vendedor: User;

    @Column({ name: 'tipo_comprobante', length: 20, comment: 'Boleta, Factura' })
    tipo_comprobante: string;

    @Column({ name: 'tipo_operacion', length: 20, default: 'Venta', comment: 'Venta, Servicio, Nota' })
    tipo_operacion: string;

    @Column({ name: 'forma_pago', length: 20, default: 'Contado', comment: 'Contado, Credito' })
    forma_pago: string;

    @Column({ name: 'moneda', length: 3, default: 'PEN', comment: 'PEN, USD' })
    moneda: string;

    @Column({ name: 'subtotal', type: 'decimal', precision: 10, scale: 2 })
    subtotal: number;

    @Column({ name: 'igv', type: 'decimal', precision: 10, scale: 2 })
    igv: number;

    @Column({ name: 'descuento_global', type: 'decimal', precision: 10, scale: 2, default: 0.00 })
    descuento_global: number;

    @Column({ name: 'total', type: 'decimal', precision: 10, scale: 2 })
    total: number;

    @Column({ name: 'observaciones', type: 'text', nullable: true })
    observaciones: string;

    @Column({ name: 'estado', length: 20, default: 'pendiente', comment: 'pendiente, pagado, anulado' })
    estado: string;

    @Column({ name: 'anulado_por', nullable: true, comment: 'Usuario que anuló (si aplica)' })
    anulado_por: number;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'anulado_por' })
    anulador: User;

    @Column({ name: 'fecha_anulacion', type: 'datetime', nullable: true, comment: 'Fecha de anulación' })
    fecha_anulacion: Date;

    @OneToMany(() => SaleItem, item => item.venta)
    items: SaleItem[];

}
