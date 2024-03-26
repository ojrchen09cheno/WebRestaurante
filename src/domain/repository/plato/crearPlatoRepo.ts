import { Plato } from "../../entities/plato";

export interface CrearPlatoRepo {
    Crear(plato: Plato): Promise<Plato>;
}