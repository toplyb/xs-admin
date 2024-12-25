<template>
  <div class="index-container">
    index
    <Icon class="index-icon" icon="hugeicons:audio-book-04"></Icon>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>

<style lang="less" scoped>
.index-container {
  @apply text-red;

  .index-icon {
    @apply w-3em h-3em text-blue;
  }
}
</style>
