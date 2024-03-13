import { Categoria } from "../domain/entities/categoria";

export interface crearCategoria {
    crearCategoria(nuevaCategoria: Categoria): Promise<any>;
}