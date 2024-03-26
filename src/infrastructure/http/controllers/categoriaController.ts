import { crearCategoriaD, verCategoriasD } from '../../dependencias'
import {Request, Response} from 'express'

export const crearCategoria = async (req: Request, res: Response) => {
    try {
        const response = await crearCategoriaD.crear(req.body);
        res.json(response);
    } catch (error) {
        res.status(500).send({success: false, message: "Internal server error"});
    }
}

export const verCategorias = async (req: Request, res: Response) => {
    try{
        const response = await verCategoriasD.ver();
        res.json(response);
    } catch (error) {
        res.status(500).send({success: false, message: "Internal server error"});
    }
}