
import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

class ListItemDemo extends React.Component {

  render() {
    return (
    //  <TouchableHighlight onPress={this._onPressRow.bind(this.rowID, rowData)}>
      <View style={styles.row}>  
        <Text style={styles.title}>{this.props.aditive.code}</Text>
        <Text style={styles.subtitle}>{this.props.aditive.name}</Text>
        <Text style={styles.description}>{this.props.aditive.category}</Text>
        <Text style={styles.warnings}>{this.props.aditive.description.capitalize()}</Text>
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
    backgroundColor :'#F5FCFF',
    margin: 4,
    padding: 8,
  },
  title: {
      flex: 1,
      fontSize: 20,
      marginBottom: 2,
      textAlign: 'center',
  },
  subtitle: {
    fontSize: 25,
    textAlign: 'center',
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
