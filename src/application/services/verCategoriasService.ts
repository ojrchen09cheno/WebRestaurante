import { CategoriaRepository } from "../../domain/repository/categoriaRepository";
import { verCategorias } from "../verCategorias";

export class VerCategoriasService implements verCategorias {

    categoria: CategoriaRepository;

    constructor(
        private categoriaConstr: CategoriaRepository) { 
            this.categoria = categoriaConstr;
         }

    async verCategorias(): Promise<{}> {
        const data = await this.categoria.findAll();
        return data
    }


}