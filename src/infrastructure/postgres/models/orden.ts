import { Model, DataTypes } from 'sequelize';

const ORDEN_TABLE = 'orden';

export class OrdenDB extends Model {
    static config(sequelize: any){
        return{
            sequelize,
            tableName: ORDEN_TABLE,
            modelName: 'orden',
            timestamps: true
        }
    }
}

export const OrdenSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    precio: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field:'precio',
    },
    userId: {
        type: DataTypes.INTEGER,
        field:'userId',
        references: {
            model: 'user',
            key: 'id'
        },
    },
}

module.exports = { OrdenDB, OrdenSchema };