import { Categoria } from "../../domain/entities/categoria";
import { CategoriaRepository } from "../../domain/repository/categoriaRepository";

export class CategoriaRepositoryAdapter implements CategoriaRepository{

    //constructor(private )

    findById(id: number): Promise<Categoria> {
        throw new Error("Method not implemented.");
    }
    findAll(): Promise<Categoria[]> {
        throw new Error("Method not implemented.");
    }
    
}