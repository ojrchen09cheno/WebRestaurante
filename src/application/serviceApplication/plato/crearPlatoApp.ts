import { buscarCategoriaIdRepo } from "../../../domain/repository/categoria/buscarCategoriaIdRepo";
import { CrearPlatoRepo } from "../../../domain/repository/plato/crearPlatoRepo";
import { CrearPlatoService } from "../../../domain/services/plato/crearPlatoService";
import { ResponseApi } from "../responseApi";

export class CrearPlatoApp implements CrearPlatoService {

    constructor(
        private CrearPlatoRepo: CrearPlatoRepo,
        private buscarCategoriaIdRepo: buscarCategoriaIdRepo,
    ) { }

    async crearPlato(plato: any) {
        const categoria = await this.buscarCategoriaIdRepo.findById(plato.categoria);
        if (!categoria) {
            return new ResponseApi(200, false, "Categoria no encontrada", plato);
        }
        if (plato.precio < 1) {
            return new ResponseApi(200, false, "El precio del plato debe ser mayor a 0", plato);
        }
        if (!plato.nombre) {
            return new ResponseApi(200, false, "El plato no tiene nombre", plato);
        }
        const saved = await this.CrearPlatoRepo.Crear(plato)
        return new ResponseApi(201, true, "Plato guardado", saved)
    }

}