import { getCustomRepository } from 'typeorm'
import { UsersRepository } from '../repositories/UsersRepository'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface IAuthenticate{
    email : string
    password : string
}

class AuthenticateUser{
    async execute({ email, password }: IAuthenticate) {
        const userRepositories = getCustomRepository(UsersRepository)
        const user = await userRepositories.findOne({
            email
        })

        if(!user){
            throw new Error("Email/Password invalid")
        }

        const passwordMatch = await compare(password,user.password)

        if(!passwordMatch){
            throw new Error("Email/Password invalid")
        }

        const token = sign({
            email : user.email
        },"oláNLW",{
            subject: user.id,
            expiresIn : "1d"
        })
        return token
    }

}

export { AuthenticateUser }