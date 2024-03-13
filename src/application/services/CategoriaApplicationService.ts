import { Categoria } from "../../domain/entities/categoria";
import { CategoriaRepository } from "../../domain/repository/categoriaRepository";
import { crearCategoria } from "../crearCategoria";
import { NuevaCategoriaDTO } from "../data/nuevaCategoriaDTO";

export class CategoriaApplicationService implements crearCategoria {

    constructor(
        private categoria: CategoriaRepository,
    ) { }

    async crearCategoria(data: any) {
        //const entity = Categoria.create(data); 
        const saved = await this.categoria.guardar(data)
        return data
    }


}