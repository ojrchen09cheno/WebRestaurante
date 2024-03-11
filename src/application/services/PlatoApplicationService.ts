import { Plato } from "../../domain/entities/plato";
import { CategoriaRepository } from "../../domain/repository/categoriaRepository";
import { PlatoRepository } from "../../domain/repository/platoRepository";
import { crearPlato } from "../crearPlato"
import { NuevoPlatoDTO } from "../data/nuevoPlatoDTO"
import { PlatoApplicationError } from "../error/platoApplicationErrror";

export class PlatoApplicationService implements crearPlato {

    constructor(
        private plato: PlatoRepository,
        private categoria: CategoriaRepository,
    ) { }

    async crearPlato(nuevoPlato: NuevoPlatoDTO) {
        const category = await this.categoria.findById(nuevoPlato.platoCategoria);
        if (!category) {
            throw new PlatoApplicationError(`Categoría no encontrada id=${nuevoPlato.platoCategoria}`)
        }
        const entity = Plato.create(nuevoPlato.platoName, category)
        const saved = await this.plato.guardar(entity)
        return saved.platoId
    }

}