import { createApp } from 'vue';
import 'normalize.css';
import { createPinia } from 'pinia';
import 'virtual:uno.css';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import router from '@/router';
import App from './App.vue';

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(router);
app.use(pinia);
app.mount('#app');
