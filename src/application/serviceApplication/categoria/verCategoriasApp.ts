import { response } from "express";
import { Categoria } from "../../../domain/entities/categoria";
import { buscarCategoriasRepo } from "../../../domain/repository/categoria/buscarCategoriasRepo";
import { VerCategoriasService } from "../../../domain/services/categoria/verCategoriasService";
import { ResponseApi } from "../responseApi";

export class VerCategoriasApp implements VerCategoriasService {

    constructor(
        private buscarCategoriasRepo: buscarCategoriasRepo,
    ) { }
  async ver(): Promise<ResponseApi> {
    const categorias = await this.buscarCategoriasRepo.findAll();
    return new ResponseApi(200, true, "Categorias encontradas", categorias);
  }
}