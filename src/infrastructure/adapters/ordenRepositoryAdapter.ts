import { Orden } from "../../domain/entities/orden";
import { OrdenRepository } from "../../domain/repository/ordenRepository";

const models = require('../../libs/sequelize');

export class OrdenRepositoryAdapter implements OrdenRepository{

    constructor() {}

    findById(id: number): Promise<Orden> {
        throw new Error("Method not implemented.");
    }
    findAll(): Promise<Orden[]> {
        throw new Error("Method not implemented.");
    }
    ordenar(orden: Orden): Promise<Orden> {
        throw new Error("Method not implemented.");
    }

}