<template>
<!-- 所有的内容被根节点包含 -->
    <div>
<h2>wef {{msg}}</h2>
<button @click="run()" >huoq</button>
    </div>
</template>
 <script>
 export default{
     data(){
      return {
    msg:'wshihomezuj',
    }
     },
     methods:{
         run(){
             this.msg= '改版后';
         },
     },
     beforeCreate(){
         console.log('实例未创建之前')
     },
     created(){
         console.log('实例创建好')
     },
     beforeMount(){
         console.log('模板编译之前')
     },
     mounted(){// 请求数据放在这  操作dom
         console.log('模板编译完成')
     },
     beforeUpdate(){
         console.log('数据更新之前')
     },
     updated(){
         console.log('数据更新完毕')
     },
     beforeDestroy(){ //页面销毁的时候要保存一些数据，就可以监听这个销毁的生命周期函数
         console.log('实例销毁之前')
     },
     destroyed(){
         console.log('实例销毁完成')
     },
 }
 </script>
 <style lang="scss" scoped>//scoped 表示css局部样式
 h2{
     color: red;
 }
 body{
     background-color: blue;
 }
 </style>