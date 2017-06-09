import Vue from 'vue';
import {HelloComponent} from './hello';

new Vue({
  el: '#root',
  template: `
    <div>
      <h1>{{message}}</h1>
      <hello v-model="message"/>
    </div>
    `,
    components: {
      hello: HelloComponent,
    },
  data: {
    message: 'Hello from Vue.js'
  },
});
