import { Categoria } from "../../entities/categoria";

export interface buscarCategoriasRepo {
  findAll(): Promise<Categoria[]>;
}