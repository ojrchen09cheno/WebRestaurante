import { categoriaServices, verCategoriasService } from '../../dependencias'
import {Request, Response} from 'express'

export const crearCategoria = async (req: Request, res: Response) => {
    try {
        const response = await categoriaServices.crearCategoria(req.body);
        console.log('pls uwu')
        res.json({success: true, data:response});
        console.log('pls uwu')
    } catch (error) {
        res.status(500).send({success: false, message: error});
    }
}

export const verCategorias = async (req: Request, res: Response) => {
    try{
        console.log("acachi")
        const response = await verCategoriasService.verCategorias();
        console.log("acano")
        res.json({success: true, data:response});
    } catch (error) {
        res.status(500).send({success: false, message: error});
    }
}