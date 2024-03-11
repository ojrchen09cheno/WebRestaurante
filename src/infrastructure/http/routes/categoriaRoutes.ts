import express from "express"
import { crearCategoria } from '../controllers/categoriaController'
import { Request, Response } from "express"

const categoriaRouter = express.Router();

categoriaRouter.post("/", crearCategoria);

export { categoriaRouter };