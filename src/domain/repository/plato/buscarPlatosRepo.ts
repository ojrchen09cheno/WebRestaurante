import { Plato } from "../../entities/plato";

export interface buscarPlatosRepo {
    findAll(): Promise<Plato[]>;
}