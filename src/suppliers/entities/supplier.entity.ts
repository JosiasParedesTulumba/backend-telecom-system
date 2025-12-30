import { User } from "src/users/entities/user.entity";
import { Column, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('proveedores')
export class Supplier {

    @PrimaryGeneratedColumn()
    proveedor_id: number;

    @Column({ name: 'tipo_documento', length: 10, comment: 'RUC, DNI' })
    tipo_documento: string;

    @Column({ name: 'numero_documento', length: 20, unique: true })
    numero_documento: string;

    @Column({ name: 'razon_social', length: 255 })
    razon_social: string;

    @Column({ name: 'nombre_comercial', length: 255, nullable: true })
    nombre_comercial: string;

    @Column({ name: 'direccion', type: 'text', nullable: true })
    direccion: string;

    @Column({ name: 'telefono', length: 20, nullable: true })
    telefono: string;

    @Column({ name: 'email', length: 255, nullable: true })
    email: string;

    @Column({ name: 'contacto', length: 255, nullable: true })
    contacto: string;

    @Column({ name: 'estado', length: 20, default: 'activo', comment: 'activo, inactivo' })
    estado: string;

    @Column({ name: 'fecha_registro', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    fecha_registro: Date;

    @Column({ name: 'created_by', nullable: true, comment: 'Usuario que registró el proveedor' })
    created_by: number;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'created_by' })
    creator: User;

    @DeleteDateColumn({ name: 'deleted_at' })
    deleted_at: Date;

}
