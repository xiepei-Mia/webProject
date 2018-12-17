<template>
    <div class="left-nav">
        <ul>
            <li><router-link to="/">
                <i class='icon iconfont icon-tubiao-' ></i>
                <div>收银</div></router-link>
            </li>
            <li><router-link to="/">
                <i class='icon iconfont icon-dianpu' ></i>
                <div>店铺</div></router-link>
            </li>
            <router-link to="/"><li>
                <i class='icon iconfont icon-caidan1' ></i>
                <div>菜单</div>
            </li></router-link>
            <router-link to="/"><li>
                <i class='icon iconfont icon-huiyuan-' ></i>
                <div>会员</div>
            </li></router-link>
            <router-link to="/"><li>
                <i class='icon iconfont icon-shezhi' ></i>
                <div>设置</div>
            </li></router-link>
            <router-link to="/"><li>
                <i class='icon iconfont icon-goumai' ></i>
                <div>统计</div>
            </li></router-link>
        </ul></div>
</template>

<script>
export default {
    
}
</script>

<style>
.router-link-active{
    text-decoration: none;
}
.left-nav{
    color:#000;
    height: 100%;
    width:5%;
    background-color:#1DBCE0;
    float: left;
}
.iconfont{
    font-size: 24px;
}
.left-nav ul{
    padding: 0px;
    margin: 0px;
}
.left-nav li{
    list-style: none;
    text-align: center;
    border-bottom:1px solid #1DB;
    padding:10px;
}

</style>
