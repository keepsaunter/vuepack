import Vue from 'vue';
import store from './vuex/store';
import App from './App';
import router from './router';

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
Vue.use(VueMaterial)
// Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
	el: '#app',
	store,
	router,
	render (h) {
		return h(App);
	}
});
