<template>
  <div id="app">
    <!-- 使用组件 -->
    <!-- <v-home v-if="flag"></v-home>
    <button @click="flag=!flag">挂载以及卸载组件</button>
    <div  class="todo" :style="{marginTop:'100px'}" > -->
    <div  class="todo" >
      <div id="chjtd">
        <input type="text" placeholder=" todo?"  v-model="todo1" @keydown="ent1()" />
        <button @click="chji()"><i class="fa fa-plus fa-2x"></i> </button>
       </div>
      <hr />
      <input type="button" value="未完成" @click="flag=true;flag1=flag2=false">
       <input type="button" value="已完成" @click="flag1=true,flag=flag2=false">
        <input type="button" value="全部" @click=" suox()">
      <hr/>
      <div  v-if="flag">
        <h2>正在进行</h2> 
        <v-doing ></v-doing>
      </div>
      <div  v-if="flag1">
        <h2>已完成</h2>
         <!-- <span>{{donecd}}</span> -->
         <v-done></v-done>
      </div>
     <div id="qjzb" v-if="flag2" >
         <h2>正在进行</h2> 
           <v-doing ref="doing" ></v-doing>
   <h2>已完成</h2> 
   <!-- <span>{{donecd}}</span> -->
      <v-done ref="done"></v-done>
     </div>
    </div>
  </div>
</template>

<script>

//引入组件
//生命周期函数：组件挂载，以及组件更新组件销毁时触发的一系列方法
import home from "./components/home";
import doing from "./components/doing.vue";
import done from "./components/done.vue";
import storage from "./model/storage.js"; //把js文件中的代码赋给storage，封装
import vuentt from  "./model/vuentt.js";
import $ from 'jquery';
 console.log(storage);
export default {
  name: "app",
  data() {
    return {
      todo1: "",
      list: [],
      flag: true,
      flag1: false,
      flag2: false,
      msg: 'keyi',
      donecd: 0,
      doingcd:0,
    };
  },
  methods: {
    chji() {
      this.list.push({ title: this.todo1, chex: false});
      this.todo1 = "";
      vuentt.$emit('todoing',this.list);
      //localStorage.setItem('list',JSON.stringify(this.list)) 未封装
       storage.set("list", this.list); //封装函数
    },
    ent1() {
      if (window.event.keyCode == 13) {
        this.chji();
      }
    },
    suox(){
        // vuentt.$emit('suxi',85);
       this.flag1=false,this.flag=false,this.flag2=true;
       console.log(this.$refs.doing)
    }
  },
  mounted() {
      center($('.todo'));
            function center(obj) {
                var screenWidth = $(window).width();
                var  screenHeight = $(window).height(); //当前浏览器窗口的 宽高
                var scrolltop = $(document).scrollTop(); //获取当前窗口距离页面顶部高度
                var objLeft = (screenWidth - obj.width()) / 2;
                var objTop = (screenHeight - obj.height()) / 2 + scrolltop;
               obj.css({
                        marginLeft: objLeft + 'px',
                        marginTop: objTop + 'px',
                        'display': 'block'
                    });
                //浏览器窗口大小改变时
                $(window).resize(function () {
                    screenWidth = $(window).width();
                    screenHeight = $(window).height();
                    scrolltop = $(document).scrollTop();
                    objLeft = (screenWidth - obj.width()) / 2;
                    objTop = (screenHeight - obj.height()) / 2 + scrolltop;
                    obj.css({
                        marginLeft: objLeft + 'px',
                        marginTop: objTop + 'px',
                        'display': 'block'
                    });
                });
    }
    //生命周期，vue页面刷新后触发
    var list=JSON.parse(localStorage.getItem('list'));
    var list = storage.get("list");
    if (list) {
      //list不为空
      this.list = list;
    }
//  vuentt.$on('toapp',(cd1)=>{
//             this.donecd = cd1;
//          });
  vuentt.$on('toapp1',(cd2)=>{
            this.doingcd = cd2;
         });
  },
  components: {
    "v-home": home,//挂载组件
    "v-doing": doing,
    "v-done": done
  }
};
</script>

<style lang="scss">
h2{
  display: inline;
}
span{
 float:left;
 margin-left: 20px;
 font-size: 21px;
}
 li {
    background-color: #fff;
    margin: 5px;
    width: 300px;
    border: 1px;
    border-left: 5px solid green;
    color: #000;
  }
body {
  background-image: url("./assets/bg.jpg");
}
.todo {
  width: 450px;
  height: 420px;
  padding: 20px;
  background-color:  rgb(226, 215, 215);
}
input{
  vertical-align: middle;
  border: 0px;
  line-height: 27px;
font-size: 20px;
  outline:none;
}
button{
 vertical-align: middle;
  background-color: #fff;
  border: 0px;
  color: #aaaaaa;
}
#chjtd {
  width: 250px;
  margin: 10px 120px;
  font-size: 0px;
  input{
      width: 200px;
  }
}
#qjzb {
 ul{
  height: 85px;
  color: blue;
}
}
</style>
