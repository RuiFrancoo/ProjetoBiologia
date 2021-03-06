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
        <Text style={styles.title}>Oops! Não Há Resultados!</Text>
        <View style={styles.container}> 
          <ListViewDemo style={styles.list}/> 
        </View> 
     </View>
    );
  }
}

const styles = StyleSheet.create({ 
  container: { 
    backgroundColor :'transparent',
  },
  view: {
    flex: 1,
    backgroundColor :'#DFDCE3',
  },
  list: {
    flex: 1,
    backgroundColor :'transparent',
    position: 'absolute',
  },
  title: {
    flex: 1,
    top: 50,
    padding: 16,
    fontSize: 24,
    backgroundColor :'transparent',
    position: 'absolute',
    alignItems:'center',
  },
}); 
