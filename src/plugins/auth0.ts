import authService from '../lib/auth/authServiceHelper';
import Vue from 'vue';

export default {
  install(vue: any) {
    Vue.prototype.$auth = authService;

    // Vue.mixin({
    //   created() {
    //     if (this.handleLoginEvent) {
    //       authService.addListener('loginEvent', this.handleLoginEvent);
    //     }
    //   },

    //   destroyed() {
    //     if (this.handleLoginEvent) {
    //       authService.removeListener('loginEvent', this.handleLoginEvent);
    //     }
    //   }
    // });
  }
};
