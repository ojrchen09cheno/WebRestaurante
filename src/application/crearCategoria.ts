import { NuevaCategoriaDTO } from "./data/nuevaCategoriaDTO";

export interface crearCategoria {
    crearCategoria(nuevaCategoria: NuevaCategoriaDTO): Promise<number>;
}