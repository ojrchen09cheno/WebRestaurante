import { categoriaServices } from '../../dependencias'
import {Request, Response} from 'express'

export const crearCategoria = async (req: Request, res: Response) => {
    try {
        console.log('pls uwu')
        const response = await categoriaServices.crearCategoria(req.body);
        res.json({success: true, data:response});
    } catch (error) {
        res.status(500).send({success: false, message: error});
    }
}