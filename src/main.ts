import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './store/index';

// plugins
import './plugins/vue-apollo';
import './plugins/vuesax';

import './registerServiceWorker';
import { createProvider } from './plugins/vue-apollo';

Vue.config.productionTip = false;

// tslint:disable-next-line: no-unused-expression
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  },
  apolloProvider: createProvider(),
  render: (h: any) => h(App)
});
