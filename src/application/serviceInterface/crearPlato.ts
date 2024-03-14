import { NuevoPlatoDTO } from "../data/nuevoPlatoDTO";

export interface crearPlato {
    crearPlato(plato: any): Promise<number>;
    verPlatos(): Promise<any>;
    verPlato(id: number): Promise<any>;
}