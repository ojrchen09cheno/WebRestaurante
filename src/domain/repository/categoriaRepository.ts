import { Categoria } from "../entities/categoria";

export interface CategoriaRepository {
    findById(id: number): Promise<Categoria>;
    findAll(): Promise<Categoria[]>;
}