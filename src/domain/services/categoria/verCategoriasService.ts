import { ResponseApi } from "../../../application/serviceApplication/responseApi";

export interface VerCategoriasService {
    ver(): Promise<ResponseApi>;
}