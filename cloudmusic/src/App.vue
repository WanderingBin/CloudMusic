<template>
  <router-view />
  <BottomControls></BottomControls>
</template>
<script>
import BottomControls from "./components/Global/BottomControls.vue";
export default {
  setup() {},
  components: {
    BottomControls,
  },
};
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
}
body {
  background-color: #fefefe;
}
.iconfont {
  font-size: 0.4rem;
}
</style>
