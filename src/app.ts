import express from "express"
import cors from "cors"
import "dotenv/config"
import morgan from "morgan" 

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

app.listen(PORT, () => console.log(`escuchando el puerto ${PORT}`));