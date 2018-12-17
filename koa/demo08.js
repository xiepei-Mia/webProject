const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();

let home = new Router();
home.get('/js',async(ctx)=>{
    ctx.body = 'home js Page';
}).get('/todo',async(ctx)=>{
    ctx.body = 'home todo Page';
})

let page = new Router();
page.get('/js', async (ctx) => {
    ctx.body = 'page js Page';
}).get('/todo', async (ctx) => {
    ctx.body = 'page todo Page';
})

let router = new Router()//父级路由
router.use('/home',home.routes(),home.allowedMethods());
router.use('/page',page.routes(),page.allowedMethods());

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000, () => {
    console.log('start in port 3000');
})