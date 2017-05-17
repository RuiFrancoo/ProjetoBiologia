import React from 'react';
import { AppRegistry, Text, View, StyleSheet, } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class ProductScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      text: 'Aditivo' 
    };
  }

  static navigationOptions = {
   title: 'Aditivo',
    header: {
        style: { backgroundColor: '#9ccc65'},
        titleStyle: { color: '#fafafa'},
    }
  };

  render() {  
    const { navigate } = this.props.navigation;
    return (
     <View style={styles.view}>
         <Text style={styles.title}>E 153</Text>
         <Text style={styles.subtitle}> Carvão vegetal</Text>
         <Text style={styles.description}>Produto natural resultante da queima de materiais vegetais e usado como corante preto.</Text>
         <Text style={styles.warnings}>Provavelmente não trará riscos à saúde se a manufactura for adequada com bastante oxigénio para a combustão.</Text>
     </View>
    );
  }
}

const styles = StyleSheet.create({ 
  container: { 
    flex: 1,
    alignItems: 'center', 
    paddingLeft: 5,
    paddingRight: 5,
  },
  view: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor :'#F5FCFF'
  },
  title: {
    fontSize: 35,
  },
  subtitle: {
    fontSize: 25,
  },
  description: {
    fontSize: 15,
    paddingTop: 30,
    textAlign: 'center',
  },
  warnings: {
    fontSize: 15,
    textAlign: 'center',
    paddingTop: 10,
  }
}); 
