<template>
    <div class="logIn">
        <h1>登录</h1>
        <p>请输入你的用户ID：<input type="text" placeholder="电话号码、或者用户账号"  v-model="username"></p>
        <p>&nbsp;&nbsp;&nbsp;请输入你的密码：<input type="password" placeholder=""  v-model="password"></p>
        <p><button @click="toHide">登录</button><button>注册</button></p>
    </div>
</template>

<script>
export default {
    name:'login',
    data(){
        return {
            username:'',
            password:''
        }
    },
    methods: {
        toHide:function () {
            if(this.username!='' && this.password!=''){
                this.$router.push('/firstpage');
                sessionStorage.setItem('username',this.username);
            } else if(this.usename!=''){
                alert('请输入密码');
            } else{
                alert('请输入账号');
            }
        }
        
    },
}
</script>

<style lang="scss">
.logIn{
    width: 500px;
    height: 300px;
    margin:0,auto;
    position: absolute;
    top: 180px;
    left: 400px;
    border: 1px #ccc solid;
}
p button{
    margin-left:20px;
    margin-right:20px;
}

</style>


