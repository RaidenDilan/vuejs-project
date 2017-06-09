import Vue from 'vue';

export const HeaderComponent = Vue.extend({
  render: function(h) {
    return (
      <div className="panel-heading">
        <h3 className="panel-title">
          <p>Please Sign In</p>
          <p>Login: admin / pwd: test</p>
        </h3>
      </div>
    );
  }
});
