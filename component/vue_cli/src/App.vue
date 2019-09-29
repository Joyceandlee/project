<template>
  <div id="app">
    <button @click="loading">show Loading...</button>
    <!-- <Loading ref="Loading" /> -->
  </div>
</template>

<script>
import Loading from "./component/loading/Loading";
export default {
  name: "App",
  components: {
    Loading
  },
  methods: {
    open() {
      // this.$refs["Loading"].visiable=true;
    }
  }
};
</script>

<style>
</style>
