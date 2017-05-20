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
   title: 'Aditivos',
    header: {
      style: { backgroundColor: '#89DA59'},
      titleStyle: { color: '#fafafa'},
    }
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
     <View style={styles.view}>
        <View style={styles.container}> 
          <ListViewDemo style={styles.list}/> 
        </View> 
     </View>
    );
  }
}

const styles = StyleSheet.create({ 
  container: { 
    flex: 1,
    alignItems: 'center',
    backgroundColor :'#DFDCE3',

  },
  view: {
    flex: 1,
    backgroundColor :'#607d8b',
  },
  list: {
    flex: 1,
    backgroundColor :'#607d8b',
  },
}); 
