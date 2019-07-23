import React, { Component } from 'react';
import Login from './Login';

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      render: 'SignupSequence1',
    };
  }
  // Lifecycle methods, etc...

  render() {
    return (
      <Login determineRender={this.state.render} />
    );
  }
}

export default LoginContainer;
