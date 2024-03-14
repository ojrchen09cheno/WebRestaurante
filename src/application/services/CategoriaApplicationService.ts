import { Categoria } from "../../domain/entities/categoria";
import { CategoriaRepository } from "../../domain/repository/categoriaRepository";
import { crearCategoria } from "../serviceInterface/crearCategoria";
import { NuevaCategoriaDTO } from "../data/nuevaCategoriaDTO";

export class CategoriaApplicationService implements crearCategoria {

    constructor(
        private categoria: CategoriaRepository,
    ) { }

    async crearCategoria(data: any) {
        if(!data.nombre){
            throw new Error("Nombre de categoria vacio")
        }
        const saved = await this.categoria.guardar(data)
        return data
    }


}