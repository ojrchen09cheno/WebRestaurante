import { CategoriaService } from "../../domain/api/categoriaService"
import { PlatoService } from "../../domain/api/platoService"
import { Plato } from "../../domain/entities/plato";
import { crearPlato } from "../crearPlato"
import { NuevoPlatoDTO } from "../data/nuevoPlatoDTO"
import { PlatoApplicationError } from "../error/platoApplicationErrror";

export class PlatoApplicationService implements crearPlato {

    constructor(
        private plato: PlatoService,
        private categoria: CategoriaService,
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