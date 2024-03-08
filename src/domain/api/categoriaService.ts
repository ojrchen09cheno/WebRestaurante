import { Categoria } from "../entities/categoria";

export interface CategoriaService{
    findById(id: number): Promise<Categoria>;
    findAll(): Promise<Categoria[]>;
}