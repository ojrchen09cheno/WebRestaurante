import { sequelize } from "../../libs/sequelize";
import { CategoriaDB } from "../postgres/models/categoria";
import { CategoriaRepository } from "../../domain/repository/categoriaRepository";
//import { sequelize } from '../dependencias'
  
export class CategoriaRepositoryAdapter implements CategoriaRepository{
    
//    sequelize: any;

    constructor() {}

    async guardar(data: any): Promise<any> {
        console.log(data)
        return CategoriaDB.create(data)
    }

    async findById(id: number): Promise<any> {
        return CategoriaDB.findByPk(id);
    }
    async findAll(): Promise<any> {
        return await CategoriaDB.findAll();
    }
    
}