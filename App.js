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
    header: {
        style: { backgroundColor: '#9ccc65'},
        titleStyle: { color: '#fafafa'},
    }
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
     <View style={styles.view}>
        <ExampleComponent />
        <View style={styles.container}> 

          <ListViewDemo row= 'row 1'/> 
          
        </View> 
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

  },
  view: {
    flex: 1,
    backgroundColor :'#F5FCFF'
  }

  }, 
); 
 

AppRegistry.registerComponent('ProjetoBiologia', () => SimpleApp);