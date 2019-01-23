<template>
    <div id="menu">
        <div >
            <el-row class="menu-head">
                <el-col :span="24" class="menu-head" >
                    <div class="menu-head-box">
                        <span >用餐人数:</span>
                        <el-input placeholder="" v-model="count" class="head" style="width:80px;"></el-input>
                        <el-button type="primary" >确定</el-button>
                    </div>
                    <div class="menu-head-search">
                        <el-input placeholder="请输入菜名" v-model="searchText" class="head" style="width:200px;"></el-input>
                        <el-button type="primary" >搜索</el-button>
                    </div>
                </el-col>
            </el-row> 
            <el-row>
                <el-col :span="6">
                    <div class="menu-list">
                         <el-menu
                            default-active="1"
                            class="el-menu-vertical-demo menu-list-nev"
                            @open="handleOpen"
                            @close="handleClose">
                            <el-menu-item index="1">
                                <i class="el-icon-location"></i>
                                <span slot="title">热卖</span>
                            </el-menu-item>
                            <el-menu-item index="2" >
                                <i class="el-icon-star-on"></i>
                                <span slot="title">套餐</span>
                            </el-menu-item>
                            <el-submenu index="3">
                                <template slot="title">
                                    <i class="el-icon-menu"></i>
                                    <span>主食</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="1-1">鸡翅/鸡排</el-menu-item>
                                    <el-menu-item index="1-2">汉堡</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                            
                            <el-menu-item index="4" >
                                <i class="el-icon-document"></i>
                                <span slot="title">小食</span>
                            </el-menu-item>
                            <el-menu-item index="5">
                                <i class="el-icon-setting"></i>
                                <span slot="title">饮品</span>
                            </el-menu-item>
                        </el-menu>
                    </div>
                </el-col>
                <el-col :span="18">
                    <div>
                        <div class="goods-list" >
                            <ul v-model="menuGoods">
                                <li v-for="goods in menuGoods" @click="" class="goods">
                                    <div class="goods-img">
                                        <img :src=goods.goodsImg >
                                        <div class="goods-name">{{goods.goodsName}}</div>
                                    </div>
                                    <div class="goods-detail">
                                        <span>{{goods.goodsPrice}}元/份</span>
                                        <div class="goods-detail-btn">
                                            <el-button @click="addCount(goods)" style="width:30px" value='+'>+</el-button>
                                                <input type="text" placeholder="" class="goods-input" v-model="goods.goodsCount" @keyup="addAllMoney(goods)">
                                            <el-button @click="reduceCount(goods)" style="width:30px">-</el-button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </el-col>
            </el-row> 
        </div>
    </div>
</template>


<script>
import bus from '../main.js'

export default {
    data(){
        return {
            count:'',
            searchText:'',
            menuGoods:[//总列表货物
                {
                    goodsId:'001',
                    goodsName:'汉堡',
                    goodsPrice:101,
                    goodsCount:0,
                    goodsType:1,
                    goodsHot:false,
                    goodsImg:'http://img3.imgtn.bdimg.com/it/u=1390963199,1618082242&fm=11&gp=0.jpg'
                },
                {
                    goodsId:'002',
                    goodsName:'好好吃汉堡',
                    goodsPrice:130,
                    goodsCount:0,
                    goodsType:1,
                    goodsHot:false,
                    goodsImg:'http://img3.imgtn.bdimg.com/it/u=1390963199,1618082242&fm=11&gp=0.jpg'
                },
                {
                    goodsId:'003',
                    goodsName:'薯条',
                    goodsPrice:100,
                    goodsCount:0,
                    goodsType:2,
                    goodsHot:false,
                    goodsImg:'http://img3.imgtn.bdimg.com/it/u=1390963199,1618082242&fm=11&gp=0.jpg'
                },
                {
                    goodsId:'004',
                    goodsName:'鸡米花',
                    goodsPrice:19,
                    goodsCount:0,
                    goodsType:2,
                    goodsHot:true,
                    goodsImg:'http://img3.imgtn.bdimg.com/it/u=1390963199,1618082242&fm=11&gp=0.jpg'
                },
            ],
            typeGoods0:[],//热卖列表
            orderGoodsList:[],
            totalMoney:0,
            totalCount:0            
        }
    },
    mounted:function(){
        var orderWidth=parseInt(document.body.clientWidth)-90;
        document.getElementById("menu").style.width=orderWidth+'px';
        this.menuGoods.forEach(element => {
            if(element.goodsHot){
                this.typeGoods0.push(element);
            }
        });
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        orderGoods:function(){
            this.orderGoodsList=[];
            this.menuGoods.forEach(element => {
                if(element.goodsCount){
                    let menuCount = parseInt(element.goodsCount);
                    if(menuCount != 0){
                        this.orderGoodsList.push(element);
                    } 
                }
            });
        },
        reduceCount:function(goods){
            if(goods.goodsCount>0){
                goods.goodsCount--;
                this.totalMoney -= goods.goodsPrice;
                this.totalCount --;
                this.orderGoods();
            }
        },
        addCount:function(goods){
            goods.goodsCount++;
            this.totalMoney += goods.goodsPrice;
            this.totalCount ++;
            this.orderGoods();
        },
        addAllMoney:function(goods){
            this.totalMoney = 0;
            this.totalCount = 0;
            this.menuGoods.forEach(element => {
                if(element.goodsCount){
                    let menuCount = parseInt(element.goodsCount);
                    if(menuCount != 0){
                        this.totalMoney += menuCount*element.goodsPrice;
                        this.totalCount += menuCount
                    } 
                }
            });
            this.orderGoods();
        },
    },
    watch:{
        totalCount:function(newVal,oldVal){
            bus.$emit('sendCount',this.totalCount);
            bus.$emit('sendmenugoods',this.orderGoodsList);
        }
    }
}
</script>


<style>
#menu{
    position: relative;
    margin-left: 90px;
    font-size: 15px;
}
.menu-head{
    height: 80px;
    background: #ccc;
    position: relative;             
}
.menu-head-box{
    width: 300px;
    margin:20px 60px;
}
.menu-head-search{
    position: absolute;
    top:20px;
    right: 100px;
}
.goods-input{
    width:30px;
    height: 30px;
    text-align: center;
}
.goods-list li{
    list-style: none;
}
.goods{
    width:300px;
    height: 200px;
    float: left;
    text-align: center;
    margin:20px 0;
}
.goods-img{
    position: relative;
    height: 150px;
    width: 250px;
    margin: 0 auto;
}
.goods-img img{
    width: 100%;
    height: 100%;
}
.goods-name{
    background: #ccc 0.4;
    position: absolute;
    bottom: 0;
    width:100%;
    height: 30px;
}
.goods-detail{
    position: relative;
}
.goods-detail>span{
    position:absolute;
    left:40px;
    top:20px;
    color: #1122ef;
    font-size: 18px;
}
.goods-detail-btn{
    position: absolute;
    right: 40px;
    top:10px;
    text-align: center;
    
}
</style>
