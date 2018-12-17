const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router({
    prefix:'/jspang'
});

router
    .get('/', (ctx, next) => {
        ctx.body = 'hellow koa - router';
    })
    .get('/todo', (ctx, next) => {
        ctx.body = 'hellow koa - router2';
    })

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000, () => {
    console.log('start in port 3000');
})