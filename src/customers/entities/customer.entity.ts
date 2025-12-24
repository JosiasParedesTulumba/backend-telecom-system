import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export enum TipoDocumento {
    DNI = 'DNI',
    RUC = 'RUC',
    CE = 'CE',
}

@Entity('clientes')
export class Customer {

    @PrimaryGeneratedColumn()
    cliente_id: number;

    @Column({ name: 'tipo_documento', type: 'enum', enum: TipoDocumento })
    tipo_documento: TipoDocumento;

    @Column({ name: 'numero_documento' })
    numero_documento: number;

    @Column({ name: 'nombre_completo', length: 255 })
    nombre: string;

    @Column({ name: 'razon_social', length: 255 })
    razon_social: string;

    @Column({ name: 'direccion', length: 255 })
    direccion: string;

    @Column({ name: 'telefono' })
    telefono: string;

    @Column({ name: 'email', length: 255 })
    email: string;

    @Column({ name: 'estado', type: 'tinyint', default: 1 })
    estado: number;

    @Column({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @Column({ name: 'created_by', nullable: true })
    created_by: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'created_by' })
    creator: User;
}

