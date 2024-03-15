import jwt from 'jsonwebtoken'
import {Request, Response} from 'express'
import { config } from '../../../config/config'

export function verifyToken(req: Request, res: Response, next: any) {
  // const token = req.header('Authorization')
  const header = req.headers["cookie"];
  if (!header) return res.status(401).json({error: "Access denied"});
  const token = header.split("=")[1];
  try{
    const decoded = jwt.verify(token, config.SECRET!);
    console.log(decoded);
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" })
    // res.redirect('/')
  }

}