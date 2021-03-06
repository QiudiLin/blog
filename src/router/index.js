import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: resolve => require(['../components/Home'], resolve),
      children: [
        {
          path: '/',
          component: resolve => require(['../pages/Index.vue'], resolve)
        },
      ]
    }
  ]
})
