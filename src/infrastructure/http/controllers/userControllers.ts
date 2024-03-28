import { buscarUsersD, loginD, registerD } from '../../dependencias'
import { CookieOptions, Request, Response } from 'express'

export const registrarse = async (req: Request, res: Response) => {
  try{
    const response = await registerD.registrarse(req.body);
    res.json(response)
  } catch (error) {
    res.status(500).send({success: false, message: error})
  }
}

export const login = async (req: Request, res: Response) => {
  try{
    const response = await loginD.login(req.body);
    delete req.body.contrasena;
    // Duracion de la sesion poner en .env?
    let options: CookieOptions = {
      maxAge: 48 * 60 * 60 * 1000,
      httpOnly: true,
      secure: true,
      sameSite: "none",
    };
    res.cookie("token", response.data.token, options);
    res.json(response)
  } catch (error: any){
    res.status(500).send({success: false, message: error.message})
  }
}

export const verUsuarios = async (req: Request, res: Response) => {
  
}