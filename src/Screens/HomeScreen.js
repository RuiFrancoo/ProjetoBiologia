import React from 'react';
import { AppRegistry, Platform, Text, TextInput, View, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ListViewDemo from './../View/ListViewDemo';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      identifier: 'Home Screen'
    };
  }

  static navigationOptions = {
   title: 'Nutrients',
    header: {
      style: { backgroundColor: '#9ccc65'},
      titleStyle: { color: '#fafafa'},
    }
  };

  render() {
    const { navigate } = this.props.navigation;
    const SearchBar = Platform.select({
      ios: () => require('./SearchBarIOS'),
      android: () => require('./SearchBarIOS')
    })();
    
    return (
     <View style={styles.view}>
        <SearchBar />
        <View style={styles.container}> 
          <ListViewDemo /> 
        </View> 
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
    backgroundColor :'#F5FCFF',
  },
}); 
