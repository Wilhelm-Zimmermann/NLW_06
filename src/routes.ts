import { Router } from 'express'
import {CreateUserController} from './controllers/CreateUserController'
import {CreateTagController} from './controllers/CreateTagController'
import {AuthenticateUserController} from './controllers/AuthenticateUserController'
import {CreateComplimentController} from './controllers/CreateComplimentController'
import {ListReceivedComplimentsController} from './controllers/ListReceivedComplimentsController'
import {ListSendComplimentsController} from './controllers/ListSendComplimentsController'

import auth from './middlewares/auth'
import isAdmin from './middlewares/isAdmin'

const router = Router()
const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()
const listSendComplimentsController = new ListSendComplimentsController()
const listReceivedComplimentsController = new ListReceivedComplimentsController()

router.post("/users", createUserController.handle)
router.post("/tags", auth,createTagController.handle)
router.get("/tags/list",auth, createTagController.ListTags)
router.post("/login", authenticateUserController.handle)
router.post("/compliments",auth, createComplimentController.handle)

router.get("/compliments/send",auth, listSendComplimentsController.handle)
router.get("/compliments/received", auth,listReceivedComplimentsController.handle)


export { router }