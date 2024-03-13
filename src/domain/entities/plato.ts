import { Categoria } from "./categoria";

export class Plato{
    id!: number;
    nombre!: string;
    categoria!: Categoria;
    descripcion!: string;
    picture!: string;
    precio!: number;

    static create(name: string, categoria: Categoria, precio: number){
        const plato = new Plato();
        plato.nombre = name;
        plato.categoria = categoria;
        plato.precio = precio;
        return plato;
    }
}