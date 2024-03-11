const { Plato, PlatoSchema } = require('./plato')
const { CategoriaDB, CategoriaSchema } = require('./categoria')
const { PlatosOrdenes, PlatoOrdenSchema } = require('./platosOrdenes')
const { Orden, OrdenSchema } = require('./orden')

export function setupModels(sequelize: any) {
    Plato.init(PlatoSchema, Plato.config(sequelize));
    CategoriaDB.init(CategoriaSchema, CategoriaDB.config(sequelize));
    Orden.init(OrdenSchema, Orden.config(sequelize));
    PlatosOrdenes.init(PlatoOrdenSchema, PlatosOrdenes.config(sequelize));
}

module.exports = setupModels;