import * as CategoriaApp from '../application/serviceApplication/categoria/index'
import * as PlatoApp from '../application/serviceApplication/plato/index'
import * as UserApp from '../application/serviceApplication/user/index'
import * as UserSQL from '../infrastructure/adapters/user/index'
import * as CategoriaSQL from '../infrastructure/adapters/categoria/index'
import * as PlatoSQL from '../infrastructure/adapters/plato/index'

export const crearCategoriaD = new CategoriaApp.CrearCategoriaApp(new CategoriaSQL.GuardarCategoriaSQL);
export const verCategoriasD = new CategoriaApp.VerCategoriasApp(new CategoriaSQL.BuscarCategoriasSQL);

export const buscarPlatoIdD = new PlatoApp.VerPlatoIdApp(new PlatoSQL.BuscarPlatoIdSQL);
export const buscarPlatosD = new PlatoApp.VerPlatosApp(new PlatoSQL.BuscarPlatosSQL);
export const crearPlatoD = new PlatoApp.CrearPlatoApp(new PlatoSQL.CrearPlatoSQL, new CategoriaSQL.BuscarCategoriaIdSQL);

export const buscarUsersD = new UserApp.BuscarUsersApp(new UserSQL.BuscarUsersSQL);
export const loginD = new UserApp.LoginApp(new UserSQL.BuscarUserNameSQL);
export const registerD = new UserApp.RegisterApp(new UserSQL.CrearUserSQL, new UserSQL.BuscarUserNameSQL);
export const verificarAdminD = new UserApp.VerificarAdminApp(new UserSQL.BuscarUserIdSQL);