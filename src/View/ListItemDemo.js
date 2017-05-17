
import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
  row: {
    flex: 1,
    marginTop: 20,
  },
  title: {
      flex: 1,
      fontSize: 20,
      marginBottom: 2,
  }
});

class ListItemDemo extends React.Component {

  render() {
    return (
      <TouchableHighlight onPress={this._onPressRow.bind(this.rowID, rowData)}>
        <View style={styles.row}>
            <Text style={styles.title}> {this.props.title} </Text>
        </View>
      </TouchableHighlight>

    );
  }
}

export default ListItemDemo;
