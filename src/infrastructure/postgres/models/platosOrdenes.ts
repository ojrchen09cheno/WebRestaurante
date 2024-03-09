import { Model, DataTypes } from 'sequelize';

const PLATOS_ORDENES = 'platosOrdenes';

export class PlatosOrdenes extends Model {
    static config(sequelize: any){
        return{
            sequelize,
            tableName: PLATOS_ORDENES,
            modelName: 'platosOrdenes',
            timestamps: true
        }
    }
}

export const PlatoOrdenSchema = {
    platoId: {
        type: DataTypes.INTEGER,
        field:'platoId',
        references: {
            model: 'plato',
            key: 'id'
        }
    },
    ordenId: {
        type: DataTypes.INTEGER,
        field:'ordenId',
        references: {
            model: 'orden',
            key: 'id'
        }
    },
}

module.exports = { PlatosOrdenes, PlatoOrdenSchema };