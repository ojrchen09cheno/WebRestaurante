import { Categoria } from "../../../domain/entities/categoria";
import { guardarCategoriaRepo } from "../../../domain/repository/categoria/guardarCategoriaRepo";
import { CrearCategoriaService } from "../../../domain/services/categoria/crearCategoriaService";
import { ResponseApi } from "../responseApi";

export class CrearCategoriaApp implements CrearCategoriaService {

    constructor(
        private guardarCategoriaRepo: guardarCategoriaRepo,
    ) { }
  async crear(nuevaCategoria: any): Promise<ResponseApi> { 
    if(!nuevaCategoria.nombre){
      return new ResponseApi(200, false, "Nombre invalido para categoria", nuevaCategoria);
    }
    const saved = await this.guardarCategoriaRepo.guardar(nuevaCategoria);
    return new ResponseApi(201, true, "Categoria creada", saved);
  }
}