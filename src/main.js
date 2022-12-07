import Vue from 'vue';
import 'bootstrap';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faRoad,
  faVideo,
  faDroplet,
  faG,
  // fabrands,
  faGear,
  faBuilding,
  faChartColumn,
}
  from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';

library.add(faRoad, faVideo, faDroplet, faG, faGear, faBuilding, faChartColumn);
//  faGoogle, mi da errore di prefisso
Vue.config.productionTip = false;
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
