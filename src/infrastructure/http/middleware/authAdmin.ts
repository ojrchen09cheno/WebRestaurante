import jwt from 'jsonwebtoken'
import {Request, Response} from 'express'
import { config } from '../../../config/config'
import { verificarAdminD } from '../../dependencias';

export async function verifyAdmin(req: Request, res: Response, next: any) {

  const header = req.headers["cookie"];
  const token = header!.split("=")[1] || null;

  if (!token) {
    return res.status(401).json({error: "Unauthorized Access"});
  }

  try{
    const decoded:any = jwt.verify(token, config.SECRET as string);
    if(await verificarAdminD.Verificar(decoded.id)){ 
      next();
    }
    else{
      res.status(403).json({ error: "Forbidden Access" }) 
    }
  } catch (error) {
    res.status(401).json({ error: "Invalid token" }) 
    // res.redirect('/')
  }

}