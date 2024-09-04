import './bootstrap';
import Vue from 'vue';
   import UserSearch from './components/UserSearch.vue';

   const app = new Vue({
       el: '#app',
       components: { UserSearch }
   });