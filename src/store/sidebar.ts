import { defineStore } from 'pinia';

export const useSidebarStore = defineStore(
  'sidebar',
  () => {
    const state = reactive({
      isCollapse: false,
      sidebarWidth: '200px',
      haveMarginInIcon: '20px',
    });

    const handlerCollapse = () => {
      state.isCollapse = !state.isCollapse;
    };

    watchEffect(() => {
      state.haveMarginInIcon = state.isCollapse ? '0px' : '20px';
      state.sidebarWidth = state.isCollapse ? '60px' : '200px';
    });

    return { state, handlerCollapse };
  },
  {
    persist: {
      storage: localStorage,
      pick: ['state.isCollapse'],
    },
  },
);
