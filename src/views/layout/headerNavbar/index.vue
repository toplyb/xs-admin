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
      <span class="icon-container">
        <Icon class="header-icon" icon="carbon:user-avatar"></Icon>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useSidebarStore } from '@/store/sidebar.ts';

const { state, handlerCollapse } = useSidebarStore();
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

  .icon-container {
    cursor: pointer;
    padding: 10px;
    color: #7a7a94;

    &:hover {
      color: #1b1b2a;
    }

    transition: color 0.2s linear;
  }

  .header-icon {
    font-size: 20px;
    cursor: pointer;
  }
}
</style>
