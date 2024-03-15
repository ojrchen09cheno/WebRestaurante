import express from "express"
import { login, registrarse, verUsuarios } from '../controllers/userControllers'

export const userRouter = express.Router();

userRouter
  .post('/login', login)
  .post('/register', registrarse)
  .get('/', verUsuarios);