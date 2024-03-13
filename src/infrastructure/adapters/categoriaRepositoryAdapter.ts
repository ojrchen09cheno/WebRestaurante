import { sequelize } from "../../libs/sequelize";
import { CategoriaDB } from "../postgres/models/categoria";
import { CategoriaRepository } from "../../domain/repository/categoriaRepository";
//import { sequelize } from '../dependencias'
  
export class CategoriaRepositoryAdapter implements CategoriaRepository{
    
//    sequelize: any;

    constructor() {}

    async guardar(categoria: any): Promise<any> {
        const newCat = CategoriaDB.create(categoria);
        return (await newCat).toJSON;
    }

    async findById(id: number): Promise<any> {
        const categoria = CategoriaDB.findByPk(id)
        return categoria;
    }
    async findAll(): Promise<any> {
        const categorias = await CategoriaDB.findAll()
        return categorias;
    }
    
}