require('./bootstrap');
window.Vue = require('vue').default;
import router from './router/routes';
import commonjs from './common.js'
import store from './globalstore.js'

Vue.mixin(commonjs);

/*---------iView----------*/
//importing
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

import { locale, Page } from 'view-design';
import lang from 'view-design/dist/locale/en-US';

import { Button, Table } from 'view-design';

//using
Vue.use(ViewUI, {
    transfer: false,
    size: 'large',
    capture: false,
    select: {
        arrow: 'md-arrow-dropdown',
        arrowSize: 20
    }
});
// Vue.component('Button', Button);
// Vue.component('Table', Table);

// configure language
locale(lang);
// import components
Vue.component('Page', Page);

/*---------iView end----------*/


/*---------Editor js start----------*/
import Editor from 'vue-editor-js'

Vue.use(Editor)
/*---------Editor js End----------*/


router.beforeEach((to, from, next) => {
    ViewUI.LoadingBar.start();
    next();
});

router.afterEach(route => {
    ViewUI.LoadingBar.finish();
});


/*---------JSON to HTML start----------*/
import JsonToHtml from './jsonToHtml.js'
Vue.mixin(JsonToHtml)
/*---------JSON to HTML start----------*/






Vue.component('mainapp', require('./mainapp.vue').default);

const app = new Vue({
    el: '#App',
    router,
    store,
});
