import { Plato } from "../../entities/plato";

export interface buscarPlatoIdRepo {
    findById(id: number): Promise<Plato>;
}