import { createApp } from 'vue';
import 'normalize.css';
import { createPinia } from 'pinia';
import 'virtual:uno.css';

import router from '@/router';
import App from './App.vue';

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.mount('#app');
