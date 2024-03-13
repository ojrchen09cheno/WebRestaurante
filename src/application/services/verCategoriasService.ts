import { CategoriaRepository } from "../../domain/repository/categoriaRepository";
import { verCategorias } from "../verCategorias";

export class VerCategoriasService implements verCategorias {

    //categoria: CategoriaRepository;

    constructor(
        private categoria: CategoriaRepository) { 
            //this.categoria = categoriaConstr;
         }

    async verCategorias(): Promise<any> {
        const data = await this.categoria.findAll();
        console.log("vercat2")
        return data
    }


}