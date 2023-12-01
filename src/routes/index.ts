import Router from 'koa-router'
import mahgenController from "../controller/mahgen";

const router = new Router()

router.post('/mahgen', mahgenController.index)

export default router