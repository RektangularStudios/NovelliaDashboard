<template>
  <div class="sidebar-link">
    <router-link to={{ route }}>
      <img src={{ image }} class="nav-icon"/>
      <p>{{ label }}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "SidebarLink",
  props: {
    label: String,
    image: String,
    route: String,
  }
}
</script>

<style lang="scss">

</style>
