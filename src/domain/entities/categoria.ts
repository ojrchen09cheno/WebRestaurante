export class Categoria{
    id!: number;
    nombre!: string;
    descripcion!: string;
    static create(nombre:string){
        const categoria = new Categoria();
        categoria.nombre = nombre;
        return categoria;
    }
}