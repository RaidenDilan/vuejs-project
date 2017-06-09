import Vue from 'vue';
import {state} from './state';

export const App = Vue.extend({
  render: function(h) {
    return (
      <div>
        <h1 class="well">{state.loginEntity}</h1>
        <router-view></router-view>
      </div>
    );
  },
});
