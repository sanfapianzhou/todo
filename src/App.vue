<template>
  <div id="app">
    <!-- 使用组件 -->
    <v-home v-if="flag"></v-home>
    <button @click="flag=!flag">挂载以及卸载组件</button>
    <div class="todo">
      <div id="chjtd">
        <input type="text" v-model="todo" @keydown="ent1()" />
        <button @click="chji()"><i class="fa fa-plus fa-2x"></i> </button>
      </div>
      <hr />
      <v-doing></v-doing>
      <v-done></v-done>
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
console.log(storage);
export default {
  name: "app",
  data() {
    return {
      todo: "",
      list: [],
      flag: true,
      msg: 'keyi',
    };
  },
  methods: {
    chji() {
      this.list.push({ title: this.todo, chex: false });
      this.todo = "";
      vuentt.$emit('todoing',this.list);
      //localStorage.setItem('list',JSON.stringify(this.list)) 未封装
      storage.set("list", this.list); //封装函数
     
    }, 
    // shch(key) {
    //   this.list.splice(key, 1);
    //   //localStorage.setItem('list',JSON.stringify(this.list))
    //   storage.set("list", this.list);
    // },
    ent1() {
      if (window.event.keyCode == 13) {
        this.chji();
      }
    },
    // bcxz() {
    //   //localStorage.setItem('list',JSON.stringify(this.list));
    //   storage.set("list", this.list);

    // }
  },
  mounted() {
    //生命周期，vue页面刷新后触发
    //var list=JSON.parse(localStorage.getItem('list'));
    var list = storage.get("list");
    if (list) {
      //list不为空
      this.list = list;
    }
  },
  components: {
    "v-home": home,//挂载组件
    "v-doing": doing,
    "v-done": done

  }
};
</script>

<style lang="scss">
body {
  background-image: url("./assets/bg.jpg");
}
.todo {
  width: 450px;
  height: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color:  rgb(226, 215, 215);
  
}
input{
  vertical-align: middle;
  border: 0px;
  line-height: 27px;
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
</style>
