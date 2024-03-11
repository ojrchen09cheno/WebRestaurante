import { Categoria } from "../../domain/entities/categoria";
import { CategoriaRepository } from "../../domain/repository/categoriaRepository";
import { crearCategoria } from "../crearCategoria";
import { NuevaCategoriaDTO } from "../data/nuevaCategoriaDTO";

export class CategoriaApplicationService implements crearCategoria {

    constructor(
        private categoria: CategoriaRepository,
    ) { }

    async crearCategoria(nuevaCategoria: NuevaCategoriaDTO) {
        const entity = Categoria.create(nuevaCategoria.nombre); 
        const saved = await this.categoria.guardar(entity)
        return saved.categoriaId
    }

}