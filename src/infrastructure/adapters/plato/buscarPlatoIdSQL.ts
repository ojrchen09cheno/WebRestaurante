import { buscarPlatoIdRepo } from "../../../domain/repository/plato/buscarPlatoIdRepo";
import { PlatoDB } from '../../postgres/models/plato'

export class BuscarPlatoIdSQL implements buscarPlatoIdRepo{

    constructor() {}
    async findById(id: number): Promise<any> {
        return await PlatoDB.findByPk(id);
    }

}