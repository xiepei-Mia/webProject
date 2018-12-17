const Koa = require('koa');
const app = new Koa();

app.use(async(ctx)=>{
    if(ctx.url === '/index' ){
        ctx.cookies.set(
            'name','js',{
                domain:'127.0.0.1',
                path: '/index',
                maxAge:1000*60*60*24,
                expires: new Date('2018-12-31'),
                httpOnly:false,
                overwrite:false
            }
        );
        ctx.body='cookies is OK';
    } else {
        ctx.body='hellow world'
    }
});

app.listen(3000,()=>{
    console.log('start in port 3000');
})