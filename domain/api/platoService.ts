import { Plato } from "../entities/plato";

export interface PlatoService {
    findById(id: number): Promise<Plato>;
    findAll(): Promise<Plato[]>;
    guardar(plato: Plato): Promise<Plato>;
    validarPrecioPlato(plato: Plato): boolean;
}