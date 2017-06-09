import Vue from 'vue';
import { HeaderComponent } from './header';
import { FormComponent } from './form';

export const LoginPage = Vue.extend({
  props: [
    'loginEntity',
    'loginError',
    'updateLogin',
    'loginRequest',
  ],
  render: function(h) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <div className="panel panel-default">
              <HeaderComponent/>
              <FormComponent
                loginEntity={ this.loginEntity }
                loginError={ this.loginError }
                updateLogin={ this.updateLogin }
                loginRequest={ this.loginRequest }/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
