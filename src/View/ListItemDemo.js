
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

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
        <View style={styles.row}>
            <Text style={styles.title}> {this.props.title} </Text>
        </View>
    );
  }
}

export default ListItemDemo;
