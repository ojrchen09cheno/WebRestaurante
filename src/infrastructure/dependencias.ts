//export const { sequelize } = require('./libs/sequelize')
import { sequelize } from '../libs/sequelize'
import { OrdenApplicationService } from '../application/services/OrdenApplicationService'
import { PlatoApplicationService } from '../application/services/PlatoApplicationService'
import { CategoriaApplicationService } from '../application/services/CategoriaApplicationService'
import { PlatoRepositoryAdapter } from '../infrastructure/adapters/PlatoRepositoryAdapter'
import { CategoriaRepositoryAdapter } from './adapters/categoriaRepositoryAdapter'
import { OrdenRepositoryAdapter } from './adapters/ordenRepositoryAdapter'
import { VerCategoriasService } from '../application/services/verCategoriasService'
import { UserApplicationService } from '../application/services/UserApplicationService'
import { UserRepositoryAdapter } from './adapters/userRepositoryAdapter'

const platoRepository = new PlatoRepositoryAdapter();
const ordenRepository = new OrdenRepositoryAdapter();
const categoriaRepository = new CategoriaRepositoryAdapter();
const userRepository = new UserRepositoryAdapter();

export const platoServices = new PlatoApplicationService(platoRepository, categoriaRepository);
export const ordenServices = new OrdenApplicationService(ordenRepository);
export const categoriaServices = new CategoriaApplicationService(categoriaRepository);
export const verCategoriasService = new VerCategoriasService(categoriaRepository);
export const userServices = new UserApplicationService(userRepository);