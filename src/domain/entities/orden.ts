export class Orden{
    id!: number;
    platos!: {};
    receiveTime!: Date;
    deliveryTime!: Date;
    
    static create(platos: {}){
        const orden = new Orden();
        orden.platos = platos;
        return orden;
    }
}