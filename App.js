import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  StyleSheet,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import ExampleComponent from './SearchBar';
import ListViewDemo from './src/View/ListViewDemo';


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
     
        <View style={styles.container}>
            <ExampleComponent />
            <ListViewDemo />
        </View>
    
    );
  }
}

class ProductScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat with Lucy',
  };
  render() {
    return (
      <View>
        <Text>Chat with Lucy</Text>
      </View>
    );
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Product: { screen: ProductScreen },
});


const styles = StyleSheet.create({ 
  container: { 
    flex: 1,
    justifyContent: 'center',  
    alignItems: 'center', 
    backgroundColor: '#F5FCFF', 
  }, 
}); 
 

AppRegistry.registerComponent('ProjetoBiologia', () => SimpleApp);