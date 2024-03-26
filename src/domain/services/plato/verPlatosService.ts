import { Plato } from "../../entities/plato";

export interface VerPlatosService {
    verPlatos(): Promise<Plato[]>;
}