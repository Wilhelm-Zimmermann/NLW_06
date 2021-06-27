import {getCustomRepository} from 'typeorm'
import { ComplimentsRepository } from '../repositories/ComplimentsRespository'
import { UsersRepository } from '../repositories/UsersRepository'

interface ICompliment{
    tag_id : string

    user_sender : string

    user_receiver : string

    message : string
}

class ComplimentsService{
    async execute({ tag_id , user_sender,user_receiver,message} : ICompliment){
        const complimentsRepository = getCustomRepository(ComplimentsRepository)

        const userRepository = getCustomRepository(UsersRepository)
        if(user_sender === user_receiver){
            throw new Error('The user sender cannot be the same as the user receiver')
        }
        const userReceiver = await userRepository.findOne(user_receiver) 

        if(!userReceiver){
            throw new Error("User receiver missing")
        }
        const compliment = complimentsRepository.create({
            tag_id,
            user_receiver,
            user_sender,
            message
        })

        await complimentsRepository.save(compliment)

        return compliment
    }
}

export { ComplimentsService }