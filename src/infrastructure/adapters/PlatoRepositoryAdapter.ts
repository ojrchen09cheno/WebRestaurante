const models = require('../../libs/sequelize');
import { Plato } from '../../domain/entities/plato';
import { PlatoRepository } from '../../domain/repository/platoRepository'

export class PlatoRepositoryAdapter implements PlatoRepository{

    constructor() {}
    
    async findById(id: number): Promise<Plato> {
        return await models.Plato.findByPk(id);
    }
    async findAll(): Promise<Plato[]> {
        return await models.Plato.findAll();
    }
    async guardar(plato: Plato): Promise<Plato> {
        return await models.Plato.create(plato);
    }

}