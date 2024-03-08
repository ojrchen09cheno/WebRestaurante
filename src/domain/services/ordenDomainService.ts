import { OrdenService } from "../api/ordenService";
import { Orden } from "../entities/orden";
import { OrdenRepository } from "../repository/ordenRepository";

export class ordenDomainService implements OrdenService {

    constructor(private repository: OrdenRepository) {};

    findById(id: number): Promise<Orden> {
        return this.repository.findById(id);
    }
    findAll(): Promise<Orden[]> {
        return this.repository.findAll();
    }
    ordenar(orden: Orden): Promise<Orden> {
        return this.repository.ordenar(orden); 
    }

}