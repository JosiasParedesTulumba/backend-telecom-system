import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum UserRole {
    ADMIN = 'admin',
    EMPLEADO = 'empleado',
}

@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    user_id: number;

    @Column()
    nombre: string;

    @Column({
        type: 'varchar',
        unique: true,
    })
    email: string;

    @Column()
    password: string;

    @Column({
        type: 'enum',
        enum: [UserRole.ADMIN, UserRole.EMPLEADO],
        default: UserRole.EMPLEADO,
    })
    rol: UserRole;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;
}