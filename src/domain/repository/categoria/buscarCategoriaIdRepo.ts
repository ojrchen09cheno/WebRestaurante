import { Categoria } from "../../entities/categoria";

export interface buscarCategoriaIdRepo {
  findById(id: number): Promise<Categoria>;
}