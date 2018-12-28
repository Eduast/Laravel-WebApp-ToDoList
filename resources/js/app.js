
require('./bootstrap');

window.Vue = require('vue');

Vue.component('my-tasks-component', require('./components/MyTasksComponent.vue'));
Vue.component('form-component', require('./components/FormComponent.vue'));
Vue.component('task-component', require('./components/TaskComponent.vue'));

const app = new Vue({
    el: '#app'
});
