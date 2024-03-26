
export class Plato{
    id!: number;
    nombre!: string;
    categoria!: number;
    descripcion!: string;
    picture!: string;
    precio!: number;

    static create(id: number, 
        name: string, 
        categoria: number, 
        descripcion: string,
        precio: number)
        {
        const plato = new Plato();
        plato.nombre = name;
        plato.categoria = categoria;
        plato.descripcion = descripcion;
        plato.precio = precio;
        return plato;
    }
}