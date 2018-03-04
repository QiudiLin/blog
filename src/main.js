import Vue from 'vue';
import App from './App';
import router from './router';

import axios from 'axios';
import _ from 'lodash';

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.prototype._ = _;

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
