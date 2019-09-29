<template>
  <div>
    父组件
    <Test v-on:test="accept" :msg="msg" />
  </div>
</template>

<script>
import Test from "../Test";
export default {
  name: "Loading",
  components: { Test },
  data() {
    return {
      visiable: false,
      msg: "我是父组件"
    };
  },

  methods: {
    open() {
      this.visiable = true;
    },
    accept(data) {
      console.log(data, "来自子组件");
    }
  }
};
</script>