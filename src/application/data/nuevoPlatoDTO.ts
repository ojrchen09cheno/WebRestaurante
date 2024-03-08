import { Categoria } from "../../domain/entities/categoria";

export interface NuevoPlatoDTO{
    platoId: number;
    platoName: string;
    platoCategoria: number;
    descripcion: string;
    picture: string;
    precio: number;
}