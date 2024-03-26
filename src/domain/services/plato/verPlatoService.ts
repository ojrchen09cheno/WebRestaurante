import { Plato } from "../../entities/plato";

export interface VerPlatoService {
    verPlato(id: number): Promise<Plato>;
}