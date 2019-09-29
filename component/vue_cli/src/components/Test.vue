<template>
  <div>
    子组件
    <button @click="send">发送给父元素</button>

    <p>来自父组件：{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: "Test",
  props: ["msg"],
  data() {
    return {};
  },
  mounted() {},
  methods: {
    send() {
      this.$emit("test", "我是子组件");
    }
  }
};
</script>