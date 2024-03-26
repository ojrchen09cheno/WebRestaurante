import { Orden } from "../../entities/orden";

export interface crearOrden {
    crearOrden(nuevaOrden: any): Promise<Orden>;
}