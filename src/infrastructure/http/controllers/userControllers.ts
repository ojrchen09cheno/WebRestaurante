import { userServices } from '../../dependencias'
import { Request, Response } from 'express'

export const registrarse = async (req: Request, res: Response) => {
  try{
    const response = await userServices.registrarse(req.body);
    res.json({success: true, data: response})
  } catch (error) {
    res.status(500).send({success: false, message: error})
  }
}

export const login = async (req: Request, res: Response) => {
  try{
    const token = await userServices.login(req.body);
    delete req.body.contrasena;
    res.json({success: true, usuario: req.body.usuario, token})
  } catch (error: any){
    res.status(500).send({success: false, message: error.message})
  }
}

export const verUsuarios = async (req: Request, res: Response) => {
  
}