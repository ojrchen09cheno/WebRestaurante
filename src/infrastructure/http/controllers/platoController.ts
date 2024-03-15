import { platoServices } from '../../dependencias'
import { Request, Response } from 'express'

export const crearPlato = async (req: Request, res: Response) => {
    try {
        const response = await platoServices.crearPlato(req.body);
        res.json({success: true, data: response});
    } catch (error) {
        res.status(500).send({success: false, message: error});
    }
}

export const verPlatos = async (req: Request, res: Response) => {
    try {
        const response = await platoServices.verPlatos();
        res.json({success: true, data: response});
    } catch (error: unknown) {
        // usar un if para specificar el tipo de error? -> if(e instanceof ErrorType)
        res.status(500).send({success: false, message: error});
    }
}

export const verPlato = async(req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const response = await platoServices.verPlato(id);
        res.json({success: true, data: response});
    } catch (error: unknown) {
        res.status(500).send({success: false, message: error})
    }
}