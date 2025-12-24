import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('almacenes')
export class Warehouse {

    @PrimaryGeneratedColumn()
    almacen_id: number;

    @Column({ name: 'almacen_codigo', unique: true, length: 50 })
    codigo: string;

    @Column({ name: 'almacen_nombre', length: 255 })
    nombre: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @Column({ name: 'created_by', nullable: true })
    created_by: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'created_by' })
    creator: User;
}
