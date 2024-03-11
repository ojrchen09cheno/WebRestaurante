import { Model, DataTypes } from 'sequelize';

const CATEGORIA_TABLE = 'categoria';

export class CategoriaDB extends Model {
    static config(sequelize: any){
        return{
            sequelize,
            tableName: CATEGORIA_TABLE,
            modelName: 'categoria',
            timestamps: true
        }
    }
}

export const CategoriaSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nombre: {
        allowNull: false,
        type: DataTypes.STRING,
        field:'nombre',
    }
}

module.exports = { CategoriaDB, CategoriaSchema };