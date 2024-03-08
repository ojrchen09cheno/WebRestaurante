import { Categoria } from "./categoria";

export class Plato{
    platoId!: number;
    platoName!: string;
    platoCategoria!: Categoria;
    descripcion!: string;
    picture!: string;
    precio!: number;

    static create(name: string, categoria: Categoria){
        const plato = new Plato();
        plato.platoName = name;
        plato.platoCategoria = categoria;
        plato.precio = 0;
        return plato;
    }
}