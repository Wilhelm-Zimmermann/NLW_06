import { Request, Response } from 'express'
import {TagsService} from "../services/TagsService"

class CreateTagController{
    
    async handle(req:Request,res:Response){
        const { name } = req.body
        const tagsService = new TagsService()

        const tag = await tagsService.execute(name)

        return res.json(tag)
    }

    async ListTags(req:Request,res:Response){
        const tagsService = new TagsService()

        const tags = await tagsService.ListTags()

        return res.json(tags)
    }
}

export { CreateTagController }