import React from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './src/Screens/HomeScreen';
import ProductScreen from './src/Screens/ProductScreen';

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Product: { screen: ProductScreen },
});

AppRegistry.registerComponent('CheckYourFood', () => SimpleApp);

//https://api.edamam.com/api/nutrition-data?app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&ingr=1%20large%20apple
//APP_ID = f5025c6a
//APP_KEY = a2d609f71f42df915ed8c9d982028c38
