import { Categoria } from "../../domain/entities/categoria";
import { CategoriaRepository } from "../../domain/repository/categoriaRepository";
const { models } = require('../../libs/sequelize')

export class CategoriaRepositoryAdapter implements CategoriaRepository{

    constructor() {}

    async findById(id: number): Promise<Categoria> {
        throw new Error("Method not implemented.");
    }
    async findAll(): Promise<Categoria[]> {
        throw new Error("Method not implemented.");
    }
    
}