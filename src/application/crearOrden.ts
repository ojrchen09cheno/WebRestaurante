import { NuevaOrdenDTO } from "./data/nuevaOrdenDTO";

export interface crearOrden {
    crearOrden(nuevaOrden: NuevaOrdenDTO): Promise<number>;
}