import { Categoria } from "../../domain/entities/categoria";

export interface NuevoPlatoDTO{
    platoId: number;
    platoName: string;
    platoCategoria: Categoria;
    descripcion: string;
    picture: string;
    precio: number;
}