<template>
  <div v-if="!item.hidden">
    <template>
      <app-link :to="resolvePath(item.path)">
        <el-menu-item :index="resolvePath(item.path)">
          <item :title="onlyOneChild.meta.title" />
        </el-menu-item>
      </app-link>
    </template>
  </div>
</template>

<script>
import Item from "./Item";
import AppLink from "./Link";
import path from "path";
import { isExternal } from "@/utils/validate";

export default {
  name: "SidebarItem",
  components: { Item, AppLink },
  props: {
    // route object
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ""
    }
  },
  date() {
    return {};
  },
  methods: {
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath;
      }
      if (isExternal(this.basePath)) {
        return this.basePath;
      }
      return path.resolve(this.basePath, routePath);
    }
  }
};
</script>

<style>
</style>