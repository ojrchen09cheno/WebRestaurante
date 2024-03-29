const { PlatoDB, PlatoSchema } = require('./plato')
const { CategoriaDB, CategoriaSchema } = require('./categoria')
const { PlatosOrdenesDB, PlatoOrdenSchema } = require('./platosOrdenes')
const { OrdenDB, OrdenSchema } = require('./orden')
import { UserDB, UserSchema } from './user'

export function setupModels(sequelize: any) {
    PlatoDB.init(PlatoSchema, PlatoDB.config(sequelize));
    CategoriaDB.init(CategoriaSchema, CategoriaDB.config(sequelize));
    UserDB.init(UserSchema, UserDB.config(sequelize));
    OrdenDB.init(OrdenSchema, OrdenDB.config(sequelize));
    PlatosOrdenesDB.init(PlatoOrdenSchema, PlatosOrdenesDB.config(sequelize));
}

module.exports = setupModels;