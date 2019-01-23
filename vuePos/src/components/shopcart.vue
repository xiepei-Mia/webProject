<template>
    <div id="shopcart">
        <el-table :data="tableData" >
            <el-table-column prop="goodsName" label="商品名称" width="180">
            </el-table-column>
            <el-table-column prop="goodsPrice" label="商品单价" width="180">
            </el-table-column>
            <el-table-column prop="goodsCount" label="数量" >
            </el-table-column>
            <el-table-column  label="操作">
                <template slot-scope="scope">
                    <el-button @click="">增加</el-button>
                    <el-button @click="">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        {{tableData}}
    </div>
</template>


<script>
import bus from '../main.js'

export default {
    data() {
        return {
          tableData: []
        }
    },
    mounted:function(){
        var inorderWidth=parseInt(document.body.clientWidth)-90;
        document.getElementById("shopcart").style.width=inorderWidth+'px';
        var that = this;
        bus.$on('sendmenugoods',function(ems){
            that.tableData = ems;
        })
    },
}
</script>


<style>
#shopcart{
    position: relative;
    margin-left: 90px;
    font-size: 15px;
}
</style>
