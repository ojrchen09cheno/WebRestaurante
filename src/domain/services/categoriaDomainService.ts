import { CategoriaService } from "../api/categoriaService";
import { Categoria } from "../entities/categoria";
import { CategoriaRepository } from "../repository/categoriaRepository";

export class categoriaDomainService implements CategoriaService{

    constructor(private repository: CategoriaRepository){};

    async findById(id: number): Promise<Categoria> {
        return this.repository.findById(id);
    }
    async findAll(): Promise<Categoria[]> {
        return this.repository.findAll();
    }

}