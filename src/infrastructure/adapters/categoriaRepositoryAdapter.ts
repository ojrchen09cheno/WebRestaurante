import { Sequelize } from "sequelize";
import { Categoria } from "../../domain/entities/categoria";
import { CategoriaRepository } from "../../domain/repository/categoriaRepository";
//import { sequelize } from '../dependencias'
  
export class CategoriaRepositoryAdapter implements CategoriaRepository{
    
    sequelize: any;

    constructor(model: Sequelize) {
        this.sequelize = model
    }
    guardar(categoria: Categoria): Promise<Categoria> {
        return this.sequelize.Categoria.guardar(categoria)
    }

    async findById(id: number): Promise<Categoria> {
        return this.sequelize.Categoria.findById(id);
    }
    async findAll(): Promise<Categoria[]> {
        return await this.sequelize.Categoria.findAll();
    }
    
}