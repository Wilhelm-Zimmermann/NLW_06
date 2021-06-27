import { Request, Response } from 'express'
import {CreateUserService} from '../services/UserService'

class CreateUserController{
    async handle(req: Request, res: Response) {

        const { name , email, admin,password } = req.body
        
        const createUserService = new CreateUserService()
        
        const user = await createUserService.execute({ name , email, admin,password })
        
        return res.json(user)
        // try{
    
        //     const { name , email, admin } = req.body
    
        //     const createUserService = new CreateUserService()
    
        //     const user = await createUserService.execute({ name , email, admin })
    
        //     return res.json(user)
        // }catch(err){
        //     return res.status(400).json({err : err.message})
        // }
    }
}

export { CreateUserController }