import { Plato } from "../entities/plato";

export interface PlatoRepository {
    findById(id: number): Promise<Plato>;
    findAll(): Promise<Plato[]>;
    guardar(plato: Plato): Promise<Plato>;
}