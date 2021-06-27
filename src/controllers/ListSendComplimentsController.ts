import { Request, Response } from "express";
import { ListSendComplimentService } from "../services/ListComplimentsSendService";


class ListSendComplimentsController{
    async handle(req:Request, res:Response){
        const { user_id } = req
        const listSendCompliments = new ListSendComplimentService()

        const compliments = await listSendCompliments.execute(user_id)

        return res.json(compliments)
    }
}

export { ListSendComplimentsController }