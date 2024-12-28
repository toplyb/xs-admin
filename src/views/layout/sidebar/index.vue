<template>
  <el-aside :width="state.sidebarWidth">
    <el-scrollbar>
      <el-menu
        :collapse="state.isCollapse"
        :collapse-transition="false"
        :router="true"
        :default-active="defaultActive"
      >
        <template v-for="menu in menuList">
          <template v-if="menu.children">
            <el-sub-menu :key="menu.id" :index="menu.id">
              <template #title>
                <Icon
                  class="sidebar-icon"
                  :style="{ marginRight: state.haveMarginInIcon }"
                  :icon="menu.icon"
                ></Icon>
                <span>{{ menu.name }}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item
                  v-for="item in menu.children"
                  :key="item.id"
                  :index="item.path"
                >
                  <Icon
                    class="sidebar-icon"
                    :style="{ marginRight: state.haveMarginInIcon }"
                    :icon="item.icon"
                  ></Icon>
                  <span>{{ item.name }}</span>
                </el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
          </template>
          <template v-else>
            <el-menu-item :key="menu.id" :index="menu.path">
              <Icon
                class="sidebar-icon"
                :style="{ marginRight: state.haveMarginInIcon }"
                :icon="menu.icon"
              ></Icon>
              <span>{{ menu.name }}</span>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useSidebarStore } from '@/store/sidebar.ts';

export interface IMenu {
  id: string;
  name: string;
  icon: string;
  path?: string;
  children?: IMenu[];
}

const menuList: IMenu[] = [
  {
    id: '1',
    name: '首页',
    icon: 'mdi:data',
    path: '/',
  },
  {
    id: '2',
    name: '用户管理',
    icon: 'mdi:account-cog',
    children: [
      {
        id: '2-1',
        name: '用户列表',
        icon: 'mdi:account-file-text',
        path: '/user',
      },
      {
        id: '2-2',
        name: '添加用户',
        icon: 'ic:round-person-add-alt-1',
        path: '/user/add',
      },
    ],
  },
  {
    id: '3',
    name: '角色管理',
    icon: 'mdi:account-multiple-outline',
    children: [
      {
        id: '3-1',
        name: '角色列表',
        icon: 'mdi:format-list-bulleted',
        path: '/role',
      },
      {
        id: '3-2',
        name: '添加角色',
        icon: 'mdi:account-multiple-plus-outline',
        path: '/role/add',
      },
    ],
  },
];

const { state } = useSidebarStore();
const route = useRoute();
const defaultActive = computed(() => {
  return route.path;
});
</script>

<style lang="less" scoped>
.el-aside,
.el-menu {
  height: 100%;
  user-select: none;
}

.el-menu {
  width: 100%;
}
.sidebar-icon {
  font-size: 20px;
}

/deep/ .el-scrollbar__view {
  height: 100%;
}
/deep/ .el-menu-item-group {
  .el-menu-item-group__title {
    display: none;
  }
}
</style>
