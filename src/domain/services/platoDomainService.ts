import { PlatoService } from "../api/platoService";
import { Plato } from "../entities/plato";
import { PlatoRepository } from "../repository/platoRepository";

export class platoDomainService implements PlatoService {

    constructor(private repository: PlatoRepository) {}
    validarPrecioPlato(plato: Plato): boolean {
        return plato.precio > 0;
    }
    
    findById(id: number): Promise<Plato> {
        return this.repository.findById(id);
    }
    findAll(): Promise<Plato[]> {
        return this.repository.findAll();
    }
    guardar(plato: Plato): Promise<Plato> {
        return this.repository.guardar(plato);
    }
}