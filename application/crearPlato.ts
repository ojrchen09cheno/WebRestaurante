import { NuevoPlatoDTO } from "./data/nuevoPlatoDTO";

export interface crearPlato {
    crearOrden(nuevoPlato: NuevoPlatoDTO): Promise<number>;
}