import { verify } from 'jsonwebtoken'
import { NextFunction, Request, Response } from "express";

interface IPayload{
    sub:string
}

export default function auth(req:Request,res:Response,next:NextFunction){
    
    const bearer_token = req.headers.authorization

    if(!bearer_token){
        return res.status(401).end()
    }
    const [,token] = bearer_token.split(' ')
    try{
        const {sub} = verify(token,'oláNLW') as IPayload
        req.user_id = sub
        return next()
    }catch(err){
        return res.status(401).end()
    }


}

