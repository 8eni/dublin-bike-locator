import React, { Component } from 'react';
import Button from 'components/Button';

class Login extends Component {
    render() {
      return <div className="container">
        <div className="row text-center">
          <div className="col-sm-8 col-md-6 ml-auto mr-auto">
            <Button link='country' text='Try for free' type='outline'></Button>
          </div>
          <div className="col-sm-8 col-md-6 ml-auto mr-auto">
            <Button link='signup' text='Sign Up'></Button>
          </div>
        </div>
      </div>
    }
}
export default Login;