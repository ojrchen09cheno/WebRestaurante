import { Plato, PlatoSchema } from './models/plato'
import { Categoria, CategoriaSchema } from './models/categoria'
import { PlatosOrdenes, PlatoOrdenSchema } from './models/platosOrdenes'
import { Orden, OrdenSchema } from './models/orden'

export function setupModels(sequelize: any) {
    Plato.init(PlatoSchema, Plato.config(sequelize));
    Categoria.init(CategoriaSchema, Categoria.config(sequelize));
    Orden.init(OrdenSchema, Orden.config(sequelize));
    PlatosOrdenes.init(PlatoOrdenSchema, PlatosOrdenes.config(sequelize));
}