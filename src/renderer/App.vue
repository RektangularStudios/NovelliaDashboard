<template>
  <div class="app">
    <h1>App</h1>
    <router-link to="/overview">
      <p>Overview</p>
    </router-link>
    <router-link to="/collection">
      <p>Collection</p>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
.app {
  //background-image: url('./occculta_novellia_splash.jpg');
  //background-size: contain;
  width: 100%;
  height: 100%;
  min-height: 100%;
  top: 0;
  left: 0;
}
</style>
