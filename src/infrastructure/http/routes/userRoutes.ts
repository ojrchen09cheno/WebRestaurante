import express from "express"
import { login, registrarse, verUsuarios } from '../controllers/userControllers'
import { verifyToken } from "../middleware/auth";

export const userRouter = express.Router();

userRouter
/**
 *  @swagger
 *  /user/login:
 *    post:
 *      tags:
 *        - user
 *      summary: "Ingresar a la cuenta"
 *      descripcion: "Este endpoint permite hacer login/ingresar a una cuenta de usuario"
 *      requestBody:
 *        content:
 *          application/json:
 *             schema:
 *              $ref: "#/components/schemas/user"
 *      responses:
 *        '200': 
 *          description: Ingresa a la cuenta y retorna un cookie para auth
 *        '401':
 *          description: Usuario o contrasena equivocado
 */
  .post('/login', login)

/**
 *  @swagger
 *  /user/register:
 *    post:
 *      tags:
 *        - user
 *      summary: "Registrarse"
 *      parameters:
 *        - in: cookie
 *          name: token
 *          schema:
 *          type: string
 *      requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/user"
 *      responses:
 *        '200': 
 *          description: Registra la cuenta en la pagina
 *        '500':
 *          description: Error en el registro
 */
  .post('/register', registrarse)
  .get('/', verifyToken, verUsuarios);