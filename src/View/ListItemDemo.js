
import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';

class ListItemDemo extends React.Component {

  render() {
    return (
    //  <TouchableHighlight onPress={this._onPressRow.bind(this.rowID, rowData)}>
      <View style={styles.row}>  
        <Text style={styles.title}>{this.props.aditive.code}</Text>
        <Text style={styles.subtitle}>{this.props.aditive.name}</Text>
        <Text style={styles.description}>{this.props.aditive.category}</Text>
        <Text style={styles.warnings}>{this.props.aditive.description}</Text>
     </View>
       // <View style={styles.row}>
          //  <Text style={styles.title}> {this.props.title} </Text>
       // </View>
    //  </TouchableHighlight>

    );
  }
}


const styles = StyleSheet.create({ 
  row: {
    flex: 1,
    alignItems: 'center',
    backgroundColor :'#F5FCFF'
  },
  title: {
      flex: 1,
      fontSize: 20,
      marginBottom: 2,
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


export default ListItemDemo;
