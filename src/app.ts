import express from "express"
import cors from "cors"
import "dotenv/config"
import morgan from "morgan" 
import { sequelize } from './libs/sequelize'

import { indexRouter } from "./infrastructure/http/index"
import { setupModels } from "./infrastructure/postgres/setup"
//import router from "./infrastructure/http/ordenRoutes.ts"

const PORT = process.env.PORT || 3001;

//try{
//    sequelize.sync();
//    setupModels(sequelize);
//} catch (e) {
//    console.log(e)
//}

const app = express();
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use('/inicio',  indexRouter)

app.listen(PORT, () => console.log(`escuchando el puerto ${PORT}`));