import { Request, Response } from 'express'
import {ComplimentsService} from "../services/ComplimentsService"

class CreateComplimentController{
    async handle(req:Request,res:Response){
        const { tag_id,user_receiver,message } = req.body
        const complimentsService = new ComplimentsService()
        const user_sender = req.user_id

        const compliment = await complimentsService.execute({tag_id,user_receiver,user_sender,message})

        return res.json(compliment)
    }
}

export { CreateComplimentController }