import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('proveedores')
export class Supplier {
    @PrimaryGeneratedColumn()
    proveedor_id: number;
}
