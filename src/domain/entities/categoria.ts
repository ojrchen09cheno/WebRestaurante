export class Categoria{
    id!: number;
    nombre!: string;
    descripcion!: string;
    static create(id: number, nombre:string){
        const categoria = new Categoria();
        categoria.nombre = nombre;
        categoria.id = id;
        return categoria;
    }
}