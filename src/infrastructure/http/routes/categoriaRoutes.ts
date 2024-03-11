import express from "express"
import { crearCategoria, verCategorias } from '../controllers/categoriaController'

const categoriaRouter = express.Router();

categoriaRouter
    .post("/", crearCategoria)
    .get("/", verCategorias);

export { categoriaRouter };