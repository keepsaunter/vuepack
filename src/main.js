import Vue from 'vue';
import store from './vuex/store';
import App from './App';
import router from './router';

import { XButton } from 'vux';

Vue.component('x-button', XButton);

Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
	el: '#app',
	store,
	router,
	render (h) {
		return h(App);
	}
});
