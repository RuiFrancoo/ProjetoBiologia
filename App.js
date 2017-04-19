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

   gethealthLabelsFromApi() {
     console.log("Ola")
    return fetch('https://api.edamam.com/api/nutrition-data?app_id=f5025c6a&app_key=a2d609f71f42df915ed8c9d982028c38&ingr=1 large apple')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log (responseJson.totalNutrients);
        
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentDidMount() {
    this.gethealthLabelsFromApi();
  }

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

//https://api.edamam.com/api/nutrition-data?app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&ingr=1%20large%20apple
//APP_ID = f5025c6a
//APP_KEY = a2d609f71f42df915ed8c9d982028c38