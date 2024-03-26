import { Plato } from '../entities/plato'

export class Orden{
    id!: number;
    platos!: Plato[];
    receiveTime!: Date;
    deliveryTime!: Date;
    
    static create(id: number, platos: Plato[]){
        const orden = new Orden();
        orden.platos = platos;
        orden.id = id;
        return orden;
    }
}