import { Orden } from "../entities/orden";

export interface OrdenRepository {
    findById(id: number): Promise<Orden>;
    findAll(): Promise<Orden[]>;
    ordenar(orden: Orden): Promise<Orden>;
}