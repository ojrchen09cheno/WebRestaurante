import jwt from 'jsonwebtoken'
import {Request, Response} from 'express'
import { config } from '../../../config/config'

export function verifyToken(req: Request, res: Response, next: any) {
  // const token = req.header('Authorization')
  const header = req.headers["cookie"];
  const token = header!.split("=")[1] || null;

  if (!token) {
    return res.status(401).json({error: "Access denied"});
  }
  try{
    const decoded = jwt.verify(token, config.SECRET as string)
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" }) 
    // res.redirect('/')
  }

}