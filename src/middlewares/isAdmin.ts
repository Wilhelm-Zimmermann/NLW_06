import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";



export default async function isAdmin(req:Request,res:Response,next:NextFunction){
    const {user_id} = req

    const userRepository = getCustomRepository(UsersRepository)
    const {admin} = await userRepository.findOne(user_id)
    if(admin){
        return next()
    }

    return res.status(401).json({err : 'LOL'})
}