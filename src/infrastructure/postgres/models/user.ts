import { Model, DataTypes } from 'sequelize';

const USER_TABLE = 'user';

export class UserDB extends Model {
    static config(sequelize: any){
        return{
            sequelize,
            tableName: USER_TABLE,
            modelName: 'user',
            timestamps: true,
        }
    }
}

export const UserSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    role:{
      allowNull: false,
      type: DataTypes.INTEGER,
      field:'role',
      defaultValue: 1
    },
    nombre: {
        allowNull: false,
        type: DataTypes.STRING,
        field:'nombre',
    },
    user: {
      allowNull: false,
      type: DataTypes.STRING,
      field:'user',
      unique: true,
    },
    contrasena: {
      allowNull: false,
      type: DataTypes.STRING,
      field:'contrasena',
    },
    direccion: {
      allowNull: true,
      type: DataTypes.STRING,
      field:'direccion',
    },
}

module.exports = { UserDB, UserSchema };