import { CrearPlatoRepo } from '../../../domain/repository/plato/crearPlatoRepo'
import { PlatoDB } from '../../postgres/models/plato'

export class CrearPlatoSQL implements CrearPlatoRepo{

    constructor() {}
    async Crear(plato: any): Promise<any> {
        return await PlatoDB.create(plato);
    }

}