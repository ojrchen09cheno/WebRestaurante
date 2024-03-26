import { ResponseApi } from "../../../application/serviceApplication/responseApi";
import { Categoria } from "../../entities/categoria";

export interface CrearCategoriaService {
    crear(nuevaCategoria: Categoria): Promise<ResponseApi>;
}