import { CategoriaDB } from "../../postgres/models/categoria";
import { buscarCategoriaIdRepo } from "../../../domain/repository/categoria/buscarCategoriaIdRepo"
export class BuscarCategoriaIdSQL implements buscarCategoriaIdRepo{

    constructor() {}

    async findById(id: number): Promise<any> {
        const categoria = CategoriaDB.findByPk(id)
        return categoria;
    }
    
}