<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container" />
    <router-view />
  </div>
</template>

<script>
import { Sidebar } from "./components";

export default {
  name: "Layout",
  components: {
    Sidebar
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";

.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}

.sidebar-container {
  transition: width 0.28s;
  width: $sideBarWidth !important;
  background-color: $menuBg;
  height: 100%;
  position: fixed;
  font-size: 0px;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
}
</style>