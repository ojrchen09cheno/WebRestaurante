import { Orden } from "../../domain/entities/orden";
import { OrdenRepository } from "../../domain/repository/ordenRepository";
import { OrdenDB } from "../postgres/models/orden"

export class OrdenRepositoryAdapter implements OrdenRepository{

    constructor() {}

    findById(id: number): Promise<any> {
        return OrdenDB.findByPk(id);
    }
    findAll(): Promise<any> {
        return OrdenDB.findAll();
    }
    ordenar(orden: any): Promise<any> {
        console.log(orden)
        return OrdenDB.create(orden);
    }

}