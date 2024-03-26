import { buscarPlatoIdRepo } from "../../../domain/repository/plato/buscarPlatoIdRepo";
import { VerPlatoService } from "../../../domain/services/plato/verPlatoService";
import { ResponseApi } from "../responseApi";

export class VerPlatoIdApp implements VerPlatoService {

    constructor(
        private buscarPlatoIdRepo: buscarPlatoIdRepo
    ) { }

    async verPlato(id: any): Promise<any> {
        const plato = await this.buscarPlatoIdRepo.findById(id)
        if (plato == null) {
            return new ResponseApi(200, false, "No se encontro el plato", id);
        }
        return new ResponseApi(200, true, "Plato encontrado", plato);
    }

}