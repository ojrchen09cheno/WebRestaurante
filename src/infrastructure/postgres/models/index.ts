const { Plato, PlatoSchema } = require('./plato')
const { Categoria, CategoriaSchema } = require('./categoria')
const { PlatosOrdenes, PlatoOrdenSchema } = require('./platosOrdenes')
const { Orden, OrdenSchema } = require('./orden')

export function setupModels(sequelize: any) {
    Plato.init(PlatoSchema, Plato.config(sequelize));
    Categoria.init(CategoriaSchema, Categoria.config(sequelize));
    Orden.init(OrdenSchema, Orden.config(sequelize));
    PlatosOrdenes.init(PlatoOrdenSchema, PlatosOrdenes.config(sequelize));
}

module.exports = setupModels;