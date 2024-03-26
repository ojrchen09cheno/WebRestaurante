import express from "express"
import cors from "cors"
import "dotenv/config"
import morgan from "morgan" 
import swaggerUi from "swagger-ui-express"
import swaggerSetup from "./docs/swagger"

import { indexRouter } from "./infrastructure/http/routes/index"
import { categoriaRouter } from "./infrastructure/http/routes/categoriaRoutes"
import { platoRouter } from "./infrastructure/http/routes/platoRoutes"
import { userRouter } from "./infrastructure/http/routes/userRoutes"
import { verifyToken } from "./infrastructure/http/middleware/auth"

const PORT = process.env.PORT || 3002;

const sequelize = require('./libs/sequelize')
const app = express();
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

app.use('/inicio',  indexRouter);
app.use('/categorias', categoriaRouter);
app.use('/platos', platoRouter)
app.use('/user', userRouter)
app.use("/documentation", swaggerUi.serve, swaggerUi.setup(swaggerSetup))

app.listen(PORT, () => console.log(`escuchando el puerto ${PORT}`));