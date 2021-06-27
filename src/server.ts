import 'reflect-metadata'
import express, { NextFunction, Request, Response } from 'express'
import "express-async-errors"
import { router } from './routes'
import './database'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended : false }))

app.use('/',router)

// middleware de erro é necessário pasasar 4 parametros
app.use((err:Error, req:Request,res:Response,next:NextFunction) => {
    if(err instanceof Error){
        return res.status(400).json({
            err : err.message
        })
    }
    return res.status(500).json({
        err : "Internal Server Error"
    })
})
app.listen(8080,() => {
    console.log('Server running on port 8080')
})