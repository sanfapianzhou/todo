<template>
   <div>
        <h2>正在进行</h2>
        <ul class="zzjx" @change="bcxz()">
          <li v-for="(item,key) in list" v-if="!item.chex">
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
             list1:[],
           }
       },methods:{
           bcxz() {
      //localStorage.setItem('list',JSON.stringify(this.list));
      storage.set("list", this.list1);
    },
    shch(key) {
      this.list1.splice(key, 1);
      //localStorage.setItem('list',JSON.stringify(this.list))
      storage.set("list", this.list1);
      // vuentt.$emit('to-done',this.list1);
    },
       },created(){
vuentt.$on('todoing',function(data){
             console.log(data)
            this.list1 = data;
         });
       },
       mounted(){ 
       
         
        //  vuentt.$on('to-doing',function(data){
        //      console.log(data)
        //      list = data;
        //    });
           var list = storage.get("list");
    if (list) {
      //list不为空
      this.list1 = list;
    }  
       }
}
</script>

<style lang="scss">
.zzjx {
  padding-left: 75px;
  li {
    background-color: #fff;
    margin: 5px;
    width: 300px;
    border: 1px;
    border-left: 5px solid green;
  }
  button {
    position: float;
    float: right;
  }
}
</style>