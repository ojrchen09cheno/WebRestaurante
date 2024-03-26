import { CategoriaDB } from "../../postgres/models/categoria";
import { guardarCategoriaRepo } from "../../../domain/repository/categoria/guardarCategoriaRepo";
export class GuardarCategoriaSQL implements guardarCategoriaRepo{

    constructor() {}

    async guardar(categoria: any): Promise<any> {
        const newCat = CategoriaDB.create(categoria);
        return (await newCat).toJSON;
    }
    
}