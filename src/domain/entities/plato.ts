
export class Plato{
    id!: number;
    nombre!: string;
    categoria!: number;
    descripcion!: string;
    picture!: string;
    precio!: number;

    static create(name: string, categoria: number, precio: number){
        const plato = new Plato();
        plato.nombre = name;
        plato.categoria = categoria;
        plato.precio = precio;
        return plato;
    }
}