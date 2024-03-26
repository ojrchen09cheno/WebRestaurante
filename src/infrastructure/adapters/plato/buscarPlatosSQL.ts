import { buscarPlatosRepo } from "../../../domain/repository/plato/buscarPlatosRepo";
import { PlatoDB } from '../../postgres/models/plato'

export class BuscarPlatosSQL implements buscarPlatosRepo{

    constructor() {}
    async findAll(): Promise<any> {
        return await PlatoDB.findAll();
    }
}