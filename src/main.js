// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueRouter)

import Test from './components/test';
import User from './components/user';
import Task from './components/task';

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [{
            path: '/',
            component: User
        },
        {
            path: '/test',
            component: Test
        },
        {
            path: '/task',
            component: Task
        }
    ]

})

/* eslint-disable no-new */
new Vue({
    router,
    components: { App },
    template: '<App/>'
}).$mount('#app')