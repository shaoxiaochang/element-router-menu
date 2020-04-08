<template>
  <div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
      </el-menu>
      <sidebar-item v-for="route in myRoutes" :key="route.path" :item="route" :base-path="route.path" />
    </el-scrollbar>
  </div>
</template>

<script>
import SidebarItem from './SidebarItem'
import variables from "@/styles/variables.scss";

export default {
  components: { SidebarItem },
  computed: {
    variables() {
      return variables;
    },
    isCollapse() {
      return false;
    },
    myRoutes() {
      return this.$route
    }
  }
};
</script>

<style>
</style>