import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Plans from './Plans';

class PlansContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Plans />
    );
  }
}

export default PlansContainer;