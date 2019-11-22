<template>
     <div>
        <h2>已完成</h2>
        <ul class="ywcc" @change="bcxz()">
          <li v-for="(item,key) in list" v-if="item.chex">
            <input type="checkbox" v-model="item.chex" />
            {{item.title}}
            <button @click="shch(key)"><i class="fa fa-window-close"></i></button>
          </li>
        </ul>
      </div>
      
</template>

<script>
import storage from "../model/storage.js"; 
import vuentt from  "../model/vuentt.js";
export default {
       data(){
           return{
             list:[],
           }
       },methods:{
           bcxz() {
      //localStorage.setItem('list',JSON.stringify(this.list));
      storage.set("list", this.list);
      
    },
    shch(key) {
      this.list.splice(key, 1);
      //localStorage.setItem('list',JSON.stringify(this.list))
      storage.set("list", this.list);
vuentt.$emit('to-doing',this.list);
    },
       },
       mounted(){
              vuentt.$on('to-doing',this.list);
           var list = storage.get("list");
    if (list) {
      //list不为空
      this.list = list;
    }  
       }
}
</script>

<style lang="scss">
.ywcc {
    padding-left: 75px;
   
  li {
    background-color: #eeeeee;
    margin: 5px;
    width: 300px;
    border: 1px;
    border-left: 5px solid gray;
    color: #aaaaaa;
  }
  button {
    position: float;
    float: right;
    background-color: transparent;
  }
}
</style>