import express from "express"
import { crearPlato, verPlato, verPlatos } from '../controllers/platoController'

const platoRouter = express.Router();
platoRouter
/**
 *  @swagger
 *  /platos:
 *      get:
 *          tags:
 *              - platos
 *          summary: "Ver todos los platos"      
 *          operationId: verPlatos   
 *          responses:
 *              '200':
 *                  description: Retorna todos los platos
 *          
 */
    .get("/", verPlatos)

/**
 *  @swagger
 *  /platos/{idPlato}:
 *      get:   
 *          tags:
 *              - platos
 *          summary: "Ver plato por id"
 *          operationId: verPlato
 *          parameters:
 *            - name: idPlato
 *              in: path
 *              required: true
 *              schema:
 *                  type: 'integer'
 *          responses:
 *              '200':
 *                  descripcion: Retorna el plato seleccionado
 *          
 */
    .get("/:id", verPlato)

/**
 *  @swagger
 *  /platos:
 *      post:
 *          tags:
 *              - platos
 *          summary: "Crear plato"
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/plato"
 */
    .post("/", crearPlato);

export { platoRouter };