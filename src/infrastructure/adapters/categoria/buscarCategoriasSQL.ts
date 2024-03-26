import { CategoriaDB } from "../../postgres/models/categoria";
import { buscarCategoriasRepo } from "../../../domain/repository/categoria/buscarCategoriasRepo";
export class BuscarCategoriasSQL implements buscarCategoriasRepo{

    constructor() {}
    
    async findAll(): Promise<any> {
        const categorias = await CategoriaDB.findAll()
        return categorias;
    }
    
}