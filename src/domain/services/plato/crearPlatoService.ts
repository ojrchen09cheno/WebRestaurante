import { ResponseApi } from "../../../application/serviceApplication/responseApi";

export interface CrearPlatoService {
    crearPlato(plato: any): Promise<ResponseApi>;
}