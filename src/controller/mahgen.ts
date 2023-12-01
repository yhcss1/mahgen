import { Context } from "koa";
import { Mahgen as MahgenGen } from "../utils/mahgen";

class Mahgen {
  async index(ctx: Context){
    let {content, river = true} = ctx.request.body as {content: string, river: boolean}
    try {
      if(content) {
        const res = await MahgenGen.render(content, river)
        ctx.body = res
        return
      }
      ctx.body = 'content is empty'
    }catch(e) {
      console.log(e)
    }
    
  }
}

export default new Mahgen();