<template>
  <div class="layout-container">
    <div class="left-container">
      <sidebar></sidebar>
    </div>
    <div class="right-container">
      <div class="right-content">
        <div class="header-container">
          <header-navbar></header-navbar>
        </div>
        <div class="app-container">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.layout-container {
  width: 100%;
  height: 100%;
  display: flex;

  .left-container {
    height: 100%;
  }

  .right-container {
    min-width: 600px;
    height: 100%;
    width: 100%;
    flex: 0 1 auto;

    .right-content {
      height: 100%;
      flex: 1;
      display: flex;
      flex-direction: column;

      .app-container {
        flex: 1;
        margin: 20px;
        box-sizing: border-box;
        box-shadow:
          6px 6px 12px #dcdcdc,
          -6px -6px 12px #e4e4e4;
        border-radius: 20px;
        padding: 10px;
      }
    }
  }
}
</style>
