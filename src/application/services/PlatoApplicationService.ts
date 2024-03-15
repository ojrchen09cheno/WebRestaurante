import { Plato } from "../../domain/entities/plato";
import { CategoriaRepository } from "../../domain/repository/categoriaRepository";
import { PlatoRepository } from "../../domain/repository/platoRepository";
import { crearPlato } from "../serviceInterface/crearPlato"
import { PlatoApplicationError } from "../error/platoApplicationErrror";

export class PlatoApplicationService implements crearPlato {

    constructor(
        private plato: PlatoRepository,
        private categoria: CategoriaRepository,
    ) { }

    async verPlatos(): Promise<any> {
        const platos = await this.plato.findAll();
        return platos;
    }
    async verPlato(id: any): Promise<any> {
        const plato = await this.plato.findById(id)
        if (plato == null) {
            throw new Error(`Plato no encontrado id=${id}`);
        }
        return plato;
    }

    async crearPlato(plato: any) {
        const categoria = await this.categoria.findById(plato.categoria);
        if (!categoria) {
            throw new PlatoApplicationError(`Categoría no encontrada id=${categoria}`);
        }
        if (plato.precio < 1) {
            throw new PlatoApplicationError("El precio debe ser mayor a 0");
        }
        if (!plato.nombre) {
            throw new PlatoApplicationError("El plato no tiene nombre");
        }
        const saved = await this.plato.guardar(plato)
        return saved.id
    }

}