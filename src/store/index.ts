import { createStore } from 'vuex';
import Location from '@/store/modules/Location';
import Alert from '@/store/modules/Alert';

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    location: Location,
    alert: Alert,
  },
});
