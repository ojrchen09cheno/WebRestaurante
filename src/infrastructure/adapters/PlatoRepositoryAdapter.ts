import { Plato } from '../../domain/entities/plato';
import { PlatoRepository } from '../../domain/repository/platoRepository'
import { PlatoDB } from '../postgres/models/plato'

export class PlatoRepositoryAdapter implements PlatoRepository{

    constructor() {}
    
    async findById(id: number): Promise<any> {
        return await PlatoDB.findByPk(id);
    }
    async findAll(): Promise<any> {
        return await PlatoDB.findAll();
    }
    async guardar(plato: any): Promise<any> {
        return await PlatoDB.create(plato);
    }

}