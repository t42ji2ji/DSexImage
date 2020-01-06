import Vue from 'vue'
import App from './App.vue'
import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  faUserSecret,
  faArrowUp,
  faHandPointUp,
  faTimes,
  faUndo,
  faGrinHearts
} from '@fortawesome/free-solid-svg-icons';

import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome';

import router from './router'
import store from './store'

library.add(faUserSecret, faArrowUp, faHandPointUp, faTimes, faUndo, faGrinHearts);

Vue.component('font-awesome-icon', FontAwesomeIcon);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')