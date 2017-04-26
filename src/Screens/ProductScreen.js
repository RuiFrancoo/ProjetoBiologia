import React from 'react';
import { AppRegistry, Text, View, StyleSheet, } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class ProductScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      text: 'Product title' 
    };
  }

  static navigationOptions = {
   title: 'Product title',
    header: {
        style: { backgroundColor: '#9ccc65'},
        titleStyle: { color: '#fafafa'},
    }
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
     <View style={styles.view}>
       <Text>Chat with Lucy</Text>
     </View>
    );
  }
}

const styles = StyleSheet.create({ 
  container: { 
    flex: 1,
    alignItems: 'center', 
  },
  view: {
    flex: 1,
    backgroundColor :'#F5FCFF'
  },
}); 
