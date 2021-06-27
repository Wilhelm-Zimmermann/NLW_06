import {getCustomRepository} from 'typeorm'
import { TagsRepository } from '../repositories/TagsRepository'

class TagsService{
    async execute(name :string){
        const tagsRepository = getCustomRepository(TagsRepository)

        if(!name){
            throw new Error("Incorrect name!")
        }

        const tagExists = await tagsRepository.findOne({
            name
        })
        if(tagExists){
            throw new Error("This tag already exists")
        }

        const tags = tagsRepository.create({
            name
        })

        await tagsRepository.save(tags)

        return tags
    }

    async ListTags(){
        const tagsRepository = getCustomRepository(TagsRepository)

        const tags = await tagsRepository.find()

        return tags
    }
}

export { TagsService }