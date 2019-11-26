<template>
  <div>
    <!-- <h2>已完成</h2> -->
    <span>{{gahe}}</span>
    <ul class="ywcc" @change="bcxz()">
      <li v-for="(item,key) in list2" v-if="item.chex">
        <input type="checkbox" v-model="item.chex" />
        {{item.title}}
        <button @click="shch(key)">
          <i class="fa fa-window-close"></i>
        </button>
      </li>
    </ul>
  </div>
</template>
<script>
import storage from "../model/storage.js";
import vuentt from "../model/vuentt.js";
import $ from "jquery";
export default {
  data() {
    return {
      list2: {},
      gahe: 0
    };
  },
  methods: {
    bcxz() {
      //localStorage.setItem('list',JSON.stringify(this.list));
      storage.set("list", this.list2);
      vuentt.$emit("todoing", this.list2);
      console.log(this.list2);
      //  this.gahe= (this.list2.filter(function(item){
      //   return item.chex == true;})).length;
    },
    shch(key) {
      this.list2.splice(key, 1);
      //localStorage.setItem('list',JSON.stringify(this.list))
      storage.set("list", this.list2);
      console.log(this.list2);
      //   this.gahe = (this.list2.filter(function(item){
      // return item.chex == true;})).length;
    }
  },
  watch: {
    list2: {
      handler(val, oldVal) {
        return (this.gahe = val.filter(function(item) {
          return item.chex == true;
        }).length);
      },
      immediate: true,
      deep: true
    }
  },
  mounted() {
    vuentt.$on("todone", data2 => {
      this.list2 = data2;
    });
    // vuentt.$on('suxi',(chan)=>{
    //   this.gahe =chan;

    //   });
    var list = storage.get("list");
    if (list) {
      //list不为空
      this.list2 = list;
    }
    //   this.gahe= (this.list2.filter(function(item){
    //   return item.chex == true;})).length;
  }
};
</script>
<style lang="scss">
.ywcc {
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
  overflow: auto;
  height: 260px;
}
</style>