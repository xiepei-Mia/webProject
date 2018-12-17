<template>
    <div class="pos">
        <el-row>
            <el-col :span='7' class='post-order' id='order-list'>
                <el-tabs>
                    <el-tab-pane label='点餐'>
                        <el-table :data="table0Data" border>
                            <el-table-column prop="goodsName" label="商品名称"></el-table-column>
                            <el-table-column prop="count" label="数量" width="80" ></el-table-column>
                            <el-table-column prop="price" label="金额" width="80"></el-table-column>
                            <el-table-column label="操作" width="100" fixed="right">
                                <template slot-scope="scope">
                                    <el-button type="text" size="small" @click="delSingleGoods(scope.row)">删除</el-button>
                                    <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <div>
                        <small>数量：{{totalcount}}</small>
                        <small>金额：{{totalmoney}}</small>
                    </div>
                    <div class='div-btn'>
                        <el-button type="warning" @click="OrderGoods">挂单</el-button>
                        <el-button type="danger" @click="delAllGoods">删除</el-button>
                        <el-button type="success" @click="checkout">结账</el-button>
                    </div>
                    </el-tab-pane>
                    <el-tab-pane label='挂单'>
                            <el-table :data="tableInLine0" border >
                                <el-table-column prop="num" label="序号" width="50"></el-table-column>
                                <el-table-column prop="time" label="下单时间" width="80"></el-table-column>
                                <el-table-column label="商品详细">
                                    <template slot-scope="scope">
                                        <el-dropdown :hide-on-click="false">
                                            <span class="el-dropdown-link">
                                                商品详细<i class="el-icon-arrow-down el-icon--right"></i>
                                            </span>
                                            <el-dropdown-menu slot="dropdown" >
                                                <el-table :data="scope.row.message" >
                                                    <el-table-column prop="goodsName" label="商品名称" ></el-table-column>
                                                    <el-table-column prop="count" label="数量" width="50"></el-table-column>
                                                    <el-table-column prop="count" label="单价" width="50"></el-table-column>
                                                </el-table>
                                            </el-dropdown-menu>
                                        </el-dropdown>
                                        <div>
                                            <small>数量：{{scope.row.totalcount}}</small>
                                            <small>金额：{{scope.row.totalmoney}}</small>
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column label="操作" width="100" fixed="right">
                                    <template slot-scope="scope">
                                        <el-button type="text" size="small" @click="checkoutInLine(scope.row)">结账</el-button>
                                        <el-button type="text" size="small" @click="delSingleInLineGoods(scope.row)">删除</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                    </el-tab-pane>
                    <el-tab-pane label='外卖'>
                        <el-tabs>
                            <el-tab-pane label='新订单'></el-tab-pane>
                            <el-tab-pane label='待配送'></el-tab-pane>
                            <el-tab-pane label='已送出'></el-tab-pane>
                        </el-tabs>
                        <el-table :data="table2Data" border>
                            <el-table-column prop="goodsName" label="商品名称"></el-table-column>
                            <el-table-column prop="count" label="数量" width="80" ></el-table-column>
                            <el-table-column prop="price" label="金额" width="80"></el-table-column>
                            <el-table-column label="操作" width="100" fixed="right">
                                <template slot-scope="scope">
                                    <el-button type="text" size="small" @click="delSingleInLineGoods(scope.row)">删除</el-button>
                                    <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <div>
                            <small>数量：{{totalcount}}</small>
                            <small>金额：{{totalmoney}}</small>
                        </div>
                        <div class='div-btn'>
                            <el-button type="warning" >挂单</el-button>
                            <el-button type="danger" @click="delAllGoods">删除</el-button>
                            <el-button type="success" @click="checkout">结账</el-button>
                        </div>
                    </el-tab-pane>
                    
                </el-tabs>
            </el-col>
            <el-col :span='14' class='goods-list' id='goods-list'>
                <div class="title">常用商品</div>
                <div class="often-goods-list">
                    <ul>
                        <li v-for="goods in oftenGoods" @click="addOrderList(goods)">
                            <span>{{goods.goodsName}}</span>
                            <span class="o-class">{{goods.price}}</span>
                        </li>
                        
                    </ul>
                </div>
                <div class='goods-type'>
                    <el-tabs>
                        <el-tab-pane label="汉堡">
                            <div >
                                <ul class="goods-view">
                                    <li v-for="goods in type0Goods" @click="addOrderList(goods)">
                                        <span class="img"><img src="goods.goodsImg"></span>
                                        <span class="goods-name">{{goods.goodsName}}</span>
                                    <span class="goods-price">{{goods.price}}</span>
                                    </li>
                                </ul>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="小食">
                            <div >
                                <ul class="goods-view">
                                    <li v-for="goods in type1Goods" @click="addOrderList(goods)">
                                        <span class="img"><img src="goods.goodsImg"></span>
                                        <span class="goods-name">{{goods.goodsName}}</span>
                                    <span class="goods-price">{{goods.price}}</span>
                                    </li>
                                </ul>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="饮料">
                           <div >
                                <ul class="goods-view">
                                    <li v-for="goods in type2Goods" @click="addOrderList(goods)">
                                        <span class="img"><img src="goods.goodsImg"></span>
                                        <span class="goods-name">{{goods.goodsName}}</span>
                                    <span class="goods-price">{{goods.price}}</span>
                                    </li>
                                </ul>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="套餐">
                            <div >
                                <ul class="goods-view">
                                    <li v-for="goods in type3Goods" @click="addOrderList(goods)">
                                        <span class="img"><img src="goods.goodsImg"></span>
                                        <span class="goods-name">{{goods.goodsName}}</span>
                                    <span class="goods-price">{{goods.price}}</span>
                                    </li>
                                </ul>
                            </div>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
// import axios from 'axios';
export default {
    name:'pos',
    data(){
        return {
        tableInLine0:[],
        tableDataView0:[],
        table0Data: [],
        table1Data: [],
        table2Data: [],
        oftenGoods:[
             {
              goodsId:1,
              goodsName:'香辣鸡腿堡',
              price:18
          }, {
              goodsId:2,
              goodsName:'田园鸡腿堡',
              price:15
          }, {
              goodsId:3,
              goodsName:'和风汉堡',
              price:15
          }, {
              goodsId:4,
              goodsName:'快乐全家桶',
              price:80
          }, {
              goodsId:5,
              goodsName:'脆皮炸鸡腿',
              price:10
          }, {
              goodsId:6,
              goodsName:'魔法鸡块',
              price:20
          }, {
              goodsId:7,
              goodsName:'可乐大杯',
              price:10
          }, {
              goodsId:8,
              goodsName:'雪顶咖啡',
              price:18
          }, {
              goodsId:9,
              goodsName:'大块鸡米花',
              price:15
          }, {
              goodsId:20,
              goodsName:'薯条',
              price:17
          }
        ],
        type0Goods:[
             {
              goodsId:1,
              goodsImg:"./src/assets/img/1.jpg",
              goodsName:'香辣鸡腿堡',
              price:18
          }, {
              goodsId:2,
              goodsImg:"@/assets/img/1.jpg",
              goodsName:'田园鸡腿堡',
              price:15
          }, {
              goodsId:3,
              goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",
              goodsName:'和风汉堡',
              price:15
          },
        ],
        type1Goods:[
             {
              goodsId:5,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
              goodsName:'脆皮炸鸡腿',
              price:10
          }, {
              goodsId:6,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",
              goodsName:'魔法鸡块',
              price:20
          },{
              goodsId:9,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
              goodsName:'大块鸡米花',
              price:15
          }, {
              goodsId:20,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
              goodsName:'薯条',
              price:17
          }
        ],
        type2Goods:[
             {
              goodsId:7,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
              goodsName:'可乐大杯',
              price:10
          }, {
              goodsId:8,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
              goodsName:'雪顶咖啡',
              price:18
          }, 
        ],
        type3Goods:[
             {
              goodsId:4,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
              goodsName:'快乐全家桶',
              price:80
          },
        ],
        totalcount:0,
        totalmoney:0
        }
    },
    methods:{
        addOrderList(goods){
            //商品是否存在于列表中
            let isHave = false;
            for(let i = 0; i<this.table0Data.length; i++){
                if(this.table0Data[i].goodsId == goods.goodsId){
                    isHave = true;
                }
            }

            //根据判断编写业务逻辑
            if(isHave){
                 //改变列表中的商品数量
                 let arr = this.table0Data.filter(a => a.goodsId == goods.goodsId);
                 arr[0].count++;
            }else{
                let newGoods = {goodsId:goods.goodsId,goodsName:goods.goodsName, price:goods.price,count:1}
                this.table0Data.push(newGoods);
            }
        
         //计算汇总金额和数量
            this.getAllMoney();
        },

        getAllMoney(){
            this.totalcount=0;
            this.totalmoney=0;
            //汇总数量和金额
            if(this.table0Data){
                this.table0Data.forEach((Element)=>{
                    this.totalcount += Element.count;
                    this.totalmoney += (Element.count*Element.price);
                })
            }
        },
        checkout(){
            if(this.table0Data.length){
                this.table0Data = [];
                this.totalcount = 0;
                this.totalmoney = 0;
                this.$message({
                    message:'结账成功，感谢你为店里出了一份力！',
                    type:"success",
                });
            } else{
                this.$message.error('不能空接，老板了解你急切的心情！');
            }
        },

        delAllGoods(){
            this.table0Data=[];
            this.totalcount = 0;
            this.totalmoney = 0;
        },
        delSingleGoods(goods){
            this.table0Data=this.table0Data.filter(a=>a.goodsId != goods.goodsId)
            this.getAllMoney();
        },
        //点餐处挂单点击处理
        OrderGoods(){
            let date = new Date();
            let newDate = '';
            newDate = date.getHours()+':'+date.getMinutes();
            let newGoods ={
                num:this.tableInLine0.length+1,
                time:newDate,message:this.table0Data,
                totalcount:this.totalcount,
                totalmoney:this.totalmoney
                };
            //点餐的table0Data存储到tableInLine0中
            this.tableInLine0.push(newGoods);
            this.delAllGoods();
        },
        //单独删除一列挂单
        delSingleInLineGoods(goods){
            this.tableInLine0=this.tableInLine0.filter(a=>a.num != goods.num)
        },
        //结账
        checkoutInLine(goods){
            this.delSingleInLineGoods(goods);
            this.$message({
                message:'结账成功，感谢你为店里出了一份力！',
                type:"success",
            });
        },
    },
    created:function(){
        // axios.get('https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/oftenGoods')
        // .then(response=>{
        //     // console.log(response)
        //     this.oftenGoods = response.data

        // })
        // .catch(error=>{
        //     // console.log(error)
        //     alert('网络错误，不能访问')
        // })

        // axios.get('https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/typeGoods')
        // .then(response=>{
        //     // console.log(response)
        //     this.type0Goods = response.data[0]
        //     this.type1Goods = response.data[1]
        //     this.type2Goods = response.data[2]
        //     this.type3Goods = response.data[3]
        // })
        // .catch(error=>{
        //     // console.log(error)
        //     alert('网络错误，不能访问')
        // })
       
       
    }, 
    
    mounted:function(){
       var orderhight = document.body.clientHeight;
       console.log(orderhight)
       document.getElementById('order-list').style.height=orderhight+'px'; 
       document.getElementById('goods-list').style.height=orderhight+'px'; 
    }
    
}
</script>
<style>
.post-order{
    background-color: #F9FCFA;
    border-right: 1px solid #C0CCDA
}
.div-btn{
    margin-top:10px;
}
.title{
    height: 20px;
    border-bottom: 1px solid #D3dce6;
    padding:10px;
    text-align: left;

}
.often-goods-list ul li{
    list-style: none;
    width:120px;
    padding:10px;
    float: left;
    background-color: #FFF;
    border: 1px solid #D3dce6;
    margin:10px;
    cursor: pointer;
    
}
.o-class{
    color: rgb(109, 165, 230)
}
.goods-type{
    clear: both;
    margin:10px;
}
.goods-view  li{
    list-style: none;
    width:25%;
    border:1px solid #E5E9F2;
    height: auto;
    overflow: hidden;
    background-color:#fff;
    padding: 2px;
    float:left;
    margin: 2px;
    cursor: pointer;
}
.goods-view  li span{
    display: block;
    float:left;
}
.img{
    width: 40%;
    margin: 2px;
}
.goods-name{
    font-size: 16px;
    padding-left: 10px;
    color:brown;
}
.goods-price{   
    font-size: 16px;
    padding-left: 10px;
    padding-top:10px;        
}

</style>


