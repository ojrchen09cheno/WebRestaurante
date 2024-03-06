import { OrdenService } from "../../domain/api/ordenService"
import { Orden } from "../../domain/entities/orden";
import { crearOrden } from "../crearOrden"
import { NuevaOrdenDTO } from "../data/nuevaOrdenDTO"

export class OrdenApplicationService implements crearOrden {

    constructor(
        private orden: OrdenService,
    ) { }

    async crearOrden(nuevaOrden: NuevaOrdenDTO) {
        const entity = Orden.create(nuevaOrden.platos);
        const saved = await this.orden.ordenar(entity)
        return saved.ordenId}

}