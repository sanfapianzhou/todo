<template>
   <div>
     <div>
        <!-- <h2>正在进行</h2> -->
        <ul class="zzjx" @change="bcxz()">
          <li v-for="(item,key) in list1" v-if="!item.chex">
            <input type="checkbox" v-model="item.chex" />
            {{item.title}}
            <button @click="shch(key)"><i class="fa fa-window-close"></i></button>
          </li>
        </ul>
        </div>
      </div>
</template>

<script>
import storage from "../model/storage.js"; 
import vuentt from  "../model/vuentt.js";
// import $ from 'jquery';
export default {
       data(){
           return{
             list1:[],
             count:0,
            
           }
       },methods:{
           bcxz() {
           vuentt.$emit('todone',this.list1);
      //localStorage.setItem('list',JSON.stringify(this.list));
       storage.set("list", this.list1);
         this.count= (this.list1.filter(function(item){
    return item.chex == false;})).length;
    vuentt.$emit('toapp1',this.count);
    },
    shch(key) {
      this.list1.splice(key, 1);
      //localStorage.setItem('list',JSON.stringify(this.list))
       storage.set("list", this.list1)
       this.count= (this.list1.filter(function(item){
    return item.chex == false;})).length;
    vuentt.$emit('toapp1',this.count);
    },
        },
       mounted(){ 
         //on注意函数的写法，为箭头函数时可直接使用this
         vuentt.$on('todoing',(data1)=>{
            this.list1 = data1;
         });
        //   vuentt.$on('suxi',(chan)=>{
        //     $('.zzjx').css({
        //       height: chan +'px',
        //     })
        //  });
        //  var that =this;
        //  vuentt.$on('to-doing',function(data){
        //      console.log(data)
        //      list = data;
        //    });
           var list = storage.get("list");
    if (list) {
      //list不为空
      this.list1 = list;
      this.count= (this.list1.filter(function(item){
    return item.chex == false;})).length;
    vuentt.$emit('toapp1',this.count);
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
  overflow: auto;
  height: 260px;
}
</style>