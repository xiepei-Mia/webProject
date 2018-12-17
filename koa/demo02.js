const Koa = require('koa');
const app = new Koa();
app.use(async(ctx)=>{
    let url = ctx.utl;
    //从request总接收Get请求
    let request = ctx.request;
    let req_query = request.query;
    let req_querysting = request.querystring;
    //从上下文直接获取Get请求
    let ctx_query = ctx.query;
    let ctx_querystring = ctx.querystring;

    ctx.body ={
        url,
        req_query,
        req_querysting,
        ctx_query,
        ctx_querystring
    }
})

app.listen(3000,()=>{
    console.log('sever is starting load');
    
})