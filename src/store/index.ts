import { createStore } from 'vuex';
import Location from '@/store/modules/Location';
import Alert from '@/store/modules/Alert';
import Profile from '@/store/modules/Profile';

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
    profile: Profile,
  },
});
