// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import AMap from 'vue-amap';
import { Cell,Icon,Form,Field,Button,Swipe, SwipeItem} from 'vant';
Vue.use(Cell).use(Icon).use(Form).use(Field).use(Button).use(Swipe).use(SwipeItem);
Vue.use(AMap);

import VueAwesomeSwiper from 'vue-awesome-swiper'
import '@vant/touch-emulator';
import less from 'less'
Vue.use(less)
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

// 初始化vue-amap
AMap.initAMapApiLoader({
  // 申请的高德key
  key: 'aff59bc1b483e9478888cd311442dcdb',
  // 插件集合
  plugin: ['AMap.Geolocation'],
  v: '1.4.4'
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
