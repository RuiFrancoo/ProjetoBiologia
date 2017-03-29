
import React from 'react';
import { View, ListView, StyleSheet, Text } from 'react-native';
import ListItemDemo from "./ListItemDemo";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});

class ListViewDemo extends React.Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const rows = ['row 1', 'row 2'];
    
    this.state = {
      dataSource: ds.cloneWithRows(rows),
    };
  }

  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(data) => <ListItemDemo title={data}></ListItemDemo>}
        automaticallyAdjustContentInsets={false}
      />
    );
  }
}

export default ListViewDemo;