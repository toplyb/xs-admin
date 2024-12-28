<template>
  <div class="header-content">
    <div class="header-left">
      <span class="icon-container" @click="handlerCollapse">
        <Icon
          class="header-icon"
          :icon="
            state.isCollapse ? 'tabler:arrows-right' : 'tabler:arrows-left'
          "
        ></Icon>
      </span>
    </div>
    <div class="header-right">
      <el-dropdown>
        <span class="icon-container">
          <Icon class="header-icon" icon="carbon:user-avatar"></Icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item @click="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useSidebarStore } from '@/store/sidebar.ts';
import { useUserStore } from '@/store/user.ts';

const { state, handlerCollapse } = useSidebarStore();
const { logout } = useUserStore();
</script>

<style scoped lang="less">
.header-content {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  box-shadow:
    -6px 6px 6px #dcdcdc,
    6px -6px 6px #e4e4e4;

  .header-right {
    margin-right: 24px;
  }

  .icon-container {
    cursor: pointer;
    padding: 10px;
    color: #7a7a94;
    user-select: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s linear;

    &:hover {
      color: #1b1b2a;
      box-shadow:
        6px 6px 10px #dcdcdc,
        -6px -6px 10px #e4e4e4;
      border-radius: 10px;
    }
  }

  .header-icon {
    font-size: 20px;
    cursor: pointer;
  }
}
</style>
