import { Request, Response, Router } from "express"

const indexRouter = Router();

indexRouter.get("/", (req: Request, res: Response) => {
    res.send({ msg: "pagina de inicio"})
});

export { indexRouter };