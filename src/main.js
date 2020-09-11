import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import DoEdit from "./DoEdit";

Vue.use(DoEdit);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
