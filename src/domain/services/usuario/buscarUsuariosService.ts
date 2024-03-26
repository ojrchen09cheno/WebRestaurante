import { ResponseApi } from "../../../application/serviceApplication/responseApi";

export interface BuscarUsuariosService {
  verUsuarios(): Promise<ResponseApi>;
}