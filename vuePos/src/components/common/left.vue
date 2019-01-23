<template>
    <div id="left">
        <ul class="left-list" >
            <li><router-link to='/home'><img src="@/assets/icon/shouye.png" alt="主页"><el-badge  class="item"></el-badge></router-link></li>
            <li><router-link to='/menu'><img src="@/assets/icon/hanbao.png" alt="点菜"><el-badge   class="item" ></el-badge></router-link></li>
            <li ><router-link to='/shopcart'><img src="@/assets/icon/gouwuchekong.png" alt="购物车"><el-badge  class="item"  v-model="countinMenu" :max='99' ></el-badge></router-link></li>
            <li><router-link to='/home'><img src="@/assets/icon/liebiao.png" alt="订单"><el-badge  class="item" ></el-badge></router-link></li>
        </ul>
        <span class="left-fit"><img src="@/assets/icon/shezhi.png" alt="设置"></span>
    </div>
</template>


<script>
import bus from '../../main.js'

export default {
    data(){
        return{
            countinMenu:'',
            count:1
        }
    },
    methods:{
       
    },
    mounted () {
        var orderHeight=document.body.clientHeight;
        document.getElementById("left").style.height=orderHeight+'px';
        var that = this;
        bus.$on('sendCount',function(ems){
            that.countinMenu = ems;
        })
    },
    watch:{
        countinMenu:function(newVal,oldVal){
            this.count = this.countinMenu;
        }
    },
    
}
</script>


<style>

#left{
    width:90px;
    background: #22eeff;
    padding: 0;
    margin: 0;
    position: relative;
    float: left;
}
.left-list{
    padding: 0;
}
#left img{
    width:50px;
    margin-top:30px;
}
.left-list li{
    list-style: none;
    width:80px;
    margin:0 auto;
    position: relative;
}
.left-fit{
    position: absolute;
    bottom: 60px;
    width:80px;
    right: 0;
}
.item {
  position: absolute;
  top:12px;
  right: 2px;
}
</style>
