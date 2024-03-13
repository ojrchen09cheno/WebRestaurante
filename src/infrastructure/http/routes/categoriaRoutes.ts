import express from "express"
import { crearCategoria, verCategorias } from '../controllers/categoriaController'

const categoriaRouter = express.Router();

categoriaRouter
/**     
  * Post track
  * @swagger
  * /categorias:
  *    post:
  *     tags:
  *         - categorias
  *     summary: "Crear categoria"
  *     description: Este endpoint es para crear categorias
  *     operationid: crearCategoria
  *     requestBody: 
  *         content:
  *             application/json:
  *                schema:
  *                    $ref: "#/components/schemas/categoria"
  *     respones:
  *         '200':
  *             description: Retorna la categoria insertada.
  *         '500':
  *             description: Error de logica en la creacion.
 */
    .post("/", crearCategoria)

/**
  * Get track
  * @swagger
  * /categorias:
  *    get:
  *     tags:
  *         - categorias
  *     summary: "Ver todas las categorias"
  *     description: Este endpoint muestra todas las categorias en la base de datos
  *     responses:
  *         '200':
  *             description: Retorna todas las categorias
 */
    .get("/", verCategorias);

export { categoriaRouter };