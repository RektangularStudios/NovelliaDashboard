<template>
  <div class="sidebar">
    <SidebarLink 
      :label="Overview"
      :image="../assets/images/ui/green_emblem_blank.png"
      :route="/overview"
    />
  </div>
</template>

<script>
import SidebarLink from "./SidebarLink.vue"

export default {
  name: "Sidebar",
  components: { SidebarLink },
}
</script>

<style lang="scss">
.sidebar {
  display: flex;
  flex-direction: column;
}

.nav-icon {
  width: 100px;
  height: auto;
}
</style>
