import { CategoriaRepository } from "../../domain/repository/categoriaRepository";
import { verCategorias } from "../serviceInterface/verCategorias";

export class VerCategoriasService implements verCategorias {

    //categoria: CategoriaRepository;

    constructor(
        private categoria: CategoriaRepository) { 
            //this.categoria = categoriaConstr;
         }

    async verCategorias(): Promise<any> {
        const data = await this.categoria.findAll();
        return data
    }


}