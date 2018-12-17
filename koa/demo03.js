
const Koa = require('koa');
const app = new Koa();
app.use(async(ctx)=>{
    if(ctx.url === '/' && ctx.method === 'GET'){
        let html = `
            <h1>Koa2 request POST</h1>
            <form method='POST' action='/'>
                <p>username</p>
                <input name = 'username'/><br/>
                <p>age</p>
                <input name = 'age'/><br/>
                <p>webSite</p>
                <input name = 'webSite'/><br/>
                <button type='submit'/>提交</button>
            </form>
        `;
        ctx.body = html;

    }else if(ctx.url === '/' && ctx.method === 'POST'){
        let postData = await parsePostData(ctx);
        ctx.body = postData;
    }else{
        ctx.body = '<h1>404！</h1>';
    }
});

function parsePostData(ctx) {
    return new Promise((resolve,reject)=>{
        try{
            let postdata = '';
            ctx.req.addListener('data',(data)=>{
                postdata += data;
            })
            ctx.req.on('end',function(){
                let postData = parseQueryStr(postdata)
                resolve(postData);
            })
        }catch(error){
            reject(error);
        }
    });
}

function parseQueryStr(queryStr) {
    let queryData = {};
    let queryStrList = queryStr.split('&');
    console.log(queryStrList);
    console.log(queryStrList.entries);
    for(let [index,queryStr] of queryStrList.entries()){
        let itemList = queryStr.split('=');
        queryData[itemList[0]] = decodeURIComponent(itemList[1]);
    }
    return queryData;
}

app.listen(3000,()=>{
    console.log('server is start at port 3000');
});

