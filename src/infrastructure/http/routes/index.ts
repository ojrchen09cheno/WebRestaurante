import { Request, Response } from "express"
import express from "express"

const indexRouter = express.Router();

indexRouter.get("/", (req: Request, res: Response) => {
    res.send({ msg: "pagina de inicio"})
    console.log("/do podria?")
});

export { indexRouter };