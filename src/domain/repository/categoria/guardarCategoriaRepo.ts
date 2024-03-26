import { Categoria } from "../../entities/categoria";

export interface guardarCategoriaRepo {
  guardar(categoria: Categoria): Promise<any>;
}