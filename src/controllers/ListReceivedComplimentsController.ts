import { Request, Response } from "express";
import { ListComplimentsReceivedService } from "../services/ListComplimentReceivedService";


class ListReceivedComplimentsController{
    async handle(req:Request, res:Response){
        const { user_id } = req
        const listReceivedCompliments = new ListComplimentsReceivedService()

        const compliments = await listReceivedCompliments.execute(user_id)

        return res.json(compliments)
    }
}

export { ListReceivedComplimentsController }