import Vue from 'vue';
// import {state} from './state';

export const App = Vue.extend({
  render: function(h) {
    return (
      <div class="container-fluid">
      <router-view></router-view>
      </div>
    );
  },
});
