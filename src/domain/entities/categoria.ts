export class Categoria{
    categoriaId!: number;
    categoriaName!: string;
    descripcion!: string;
    static create(nombre:string){
        const categoria = new Categoria();
        categoria.categoriaName = nombre;
        return categoria;
    }
}