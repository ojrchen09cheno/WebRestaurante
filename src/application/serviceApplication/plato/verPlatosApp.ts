import { buscarPlatosRepo } from "../../../domain/repository/plato/buscarPlatosRepo";
import { VerPlatosService } from "../../../domain/services/plato/verPlatosService";
import { ResponseApi } from "../responseApi";

export class VerPlatosApp implements VerPlatosService {

    constructor(
        private buscarPlatosRepo: buscarPlatosRepo
    ) { }

    async verPlatos(): Promise<any> {
        const platos = await this.buscarPlatosRepo.findAll();
        return new ResponseApi(200, true, "Platos encontrados", platos)
    }

}