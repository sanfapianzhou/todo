<template>
  <div>
    <div>
      <!-- <h2>正在进行</h2> -->
      <span>{{count}}</span>
      <ul class="zzjx" @change="bcxz()">
        <li v-for="(item,key) in list1" v-if="!item.chex">
          <input type="checkbox" v-model="item.chex" />
          {{item.title}}
          <button @click="shch(key)">
            <i class="fa fa-window-close"></i>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import storage from "../model/storage.js";
import vuentt from "../model/vuentt.js";
// import $ from 'jquery';
export default {
  data() {
    return {
      list1: [],
      count: 0
    };
  },
  methods: {
    bcxz() {
      vuentt.$emit("todone", this.list1);
      storage.set("list", this.list1);
    },
    shch(key) {
      this.list1.splice(key, 1);
      storage.set("list", this.list1);
    }
  },
  watch: {
    list1: {
      handler(val, oldVal) {
        return (this.count = val.filter(function(item) {
          return item.chex == false;
        }).length);
      },
      immediate: true,
      deep: true
    }
  },
  mounted() {
    //on注意函数的写法，为箭头函数时可直接使用this
    vuentt.$on("todoing", data1 => {
      this.list1 = data1;
    });
    var list = storage.get("list");
    if (list) {
      this.list1 = list;
    }
  }
};
</script>

<style lang="scss">
.zzjx {
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