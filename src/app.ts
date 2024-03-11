import express from "express"
import cors from "cors"
import "dotenv/config"
import morgan from "morgan" 

import { indexRouter } from "./infrastructure/http/routes/index"
import { categoriaRouter } from "./infrastructure/http/routes/categoriaRoutes"
//import router from "./infrastructure/http/ordenRoutes.ts"

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use('/inicio',  indexRouter);
app.use('/categorias', categoriaRouter);

app.listen(PORT, () => console.log(`escuchando el puerto ${PORT}`));