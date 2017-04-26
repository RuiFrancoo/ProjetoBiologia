import React, { Component } from 'react';
import { TextInput } from 'react-native';

export default class SearchBarIOS extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      text: 'Search Here' 
    };
  }
  
  render() {
    return (
      <TextInput
        style={{height: 40, backgroundColor: 'red', borderColor: 'gray', borderWidth: 0.5}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
    );
  }
}

