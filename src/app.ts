import Koa from 'koa'
import config from './config'
import koaLogger from 'koa-logger'
import bodyParser from 'koa-bodyparser'
import routers from './routes/index'
const app = new Koa()
app.use(bodyParser())
app.use(koaLogger())


app.use(routers.routes()).use(routers.allowedMethods())

app.listen(config.port, () => {
  console.log(`the server is start at port ${config.port}`)
})