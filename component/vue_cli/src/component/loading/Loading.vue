<template>
  <transition @after-leave="afterLeave">
      <div class="master" v-show="visiable" @click="closed">
        <img src="https://img.zcool.cn/community/0130aa56629d096ac725b2c84bb422.gif" alt />
      </div>
  </transition>
</template>

<script>
export default {
  name: "Loading",
  data() {
    return {
      visiable: false
    };
  },
  methods: {
    closed() {
      this.visiable = false;
    },
    afterLeave() {
      this.$emit("closed");
    }
  }
};
</script>

<style scoped>
.master {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
}
img {
  width: 100%;
  margin-top: 120px;
}
.v-enter {
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
.v-enter-active {
  transition: opacity .3s linear;
}
.v-leave {
  opacity: 1;
}
.v-leave-to {
  opacity: 0;
}
.v-leave-active {
  transition: opacity .3s linear;
}
</style>