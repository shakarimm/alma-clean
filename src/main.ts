import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/scss/style.scss';
import '@/scss/pages.scss';
import '@/scss/profile.scss';

createApp(App)
  .use(store)
  .use(router)
  .mount('#app');
