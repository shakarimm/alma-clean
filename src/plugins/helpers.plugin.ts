import { App } from 'vue';
import helpers from '@/helpers';

export default {
  install(app: App): void {
    app.config.globalProperties.$helpers = helpers;
  },
};

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $helpers: typeof helpers;
  }
}
