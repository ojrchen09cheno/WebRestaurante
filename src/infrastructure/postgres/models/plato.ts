import { Model, DataTypes } from 'sequelize';

const PLATO_TABLE = 'plato';

export class PlatoDB extends Model {
    static config(sequelize: any){
        return{
            sequelize,
            tableName: PLATO_TABLE,
            modelName: 'plato',
            timestamps: true
        }
    }
}

 export const PlatoSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nombre: {
        allowNull: false,
        type: DataTypes.STRING,
        field:'nombre'
    },
    descripcion: {
        allowNull: true,
        type: DataTypes.STRING,
        field:'descripcion',
    },
    precio: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field:'precio',
    },
    categoria: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field:'categoria',
    }
}

module.exports = { PlatoDB, PlatoSchema };