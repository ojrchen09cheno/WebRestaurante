import { crearPlatoD, buscarPlatoIdD, buscarPlatosD } from '../../dependencias'
import { Request, Response } from 'express'

export const crearPlato = async (req: Request, res: Response) => {
    try {
        const response = await crearPlatoD.crearPlato(req.body);
        res.json(response);
    } catch (error) {
        res.status(500).send({success: false, message: error});
    }
}

export const verPlatos = async (req: Request, res: Response) => {
    try {
        const response = await buscarPlatosD.verPlatos();
        res.json({success: true, data: response});
    } catch (error: any) {
        // usar un if para specificar el tipo de error? -> if(e instanceof ErrorType)
        res.status(500).send({success: false, message: error.message});
    }
}

export const verPlato = async(req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const response = await buscarPlatoIdD.verPlato(id);
        res.json(response);
    } catch (error: any) {
        res.status(500).send({success: false, message: error.message})
    }
}