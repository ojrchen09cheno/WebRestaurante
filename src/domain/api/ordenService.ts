import { Orden } from "../entities/orden";

export interface OrdenService {
    findById(id: number): Promise<Orden>;
    findAll(): Promise<Orden[]>;
    ordenar(orden: Orden): Promise<Orden>;
}