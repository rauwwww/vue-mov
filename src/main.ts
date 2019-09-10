import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './store/index';

// custom styles
import '@/assets/styles/spacing.scss';
import '@/assets/styles/material-icons.scss';
import '@/assets/styles/main.scss';

// plugins
import './plugins/vue-apollo';
import './plugins/vuesax';

import './registerServiceWorker';
import { createProvider } from './plugins/vue-apollo';

Vue.config.productionTip = false;

// tslint:disable-next-line: no-unused-expression
new Vue({
  apolloProvider: createProvider(),
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  },
  render: (h: any) => h(App)
});
