import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './store/index';

// config
import './config/vue-apollo';
import './registerServiceWorker';
import { createProvider } from './config/vue-apollo';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  apolloProvider: createProvider(),
  render: (h) => h(App)
}).$mount('#app');
