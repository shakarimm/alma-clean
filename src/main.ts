import { createApp } from 'vue';
import vSelect from 'vue-select';
import VCalendar from 'v-calendar';
import helpers from '@/plugins/helpers.plugin';
import VueSocialSharing from 'vue-social-sharing';
import App from './App.vue';
import router from './router';
import store from './store';
import 'vue-select/dist/vue-select.css';
import 'v-calendar/dist/style.css';
import '@/scss/style.scss';
import '@/scss/pages.scss';
import '@/scss/profile.scss';
import '@/scss/media.scss';

createApp(App)
  .use(store)
  .use(router)
  .use(helpers)
  .use(VCalendar)
  .use(VueSocialSharing)
  .component('v-select', vSelect)
  .mount('#app');
