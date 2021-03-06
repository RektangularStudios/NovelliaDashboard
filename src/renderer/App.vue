<template>
  <div class="app">
    <Sidebar/>
    <div class="content">
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/sidebar/Sidebar.vue"

export default {
  components: { Sidebar }
}
</script>

<style lang="scss">
.app {
  background-image: url("./assets/images/logo/novellia.jpg");
  background-size: contain;
  background-position: center center;
  width: 100%;
  height: 100%;
  min-height: 100%;
  top: 0;
  left: 0;
}

.content {
  margin-left: 200px;
}
</style>
