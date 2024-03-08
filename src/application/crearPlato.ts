import { NuevoPlatoDTO } from "./data/nuevoPlatoDTO";

export interface crearPlato {
    crearPlato(nuevoPlato: NuevoPlatoDTO): Promise<number>;
}