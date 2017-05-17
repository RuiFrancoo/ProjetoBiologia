
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

    gethealthLabelsFromApi() {
      return fetch('https://api.edamam.com/api/nutrition-data?app_id=f5025c6a&app_key=a2d609f71f42df915ed8c9d982028c38&ingr=1 large apple')
        .then((response) => response.json())
        .then((responseJson) => {
          // console.log (responseJson.totalNutrients);
          var nutrients = responseJson.totalNutrients;
          var labels = [];
          for(var key in nutrients) {
            labels.push(nutrients[key].label);
          }
          return labels
        })
        .catch((error) => {
          console.error(error);
        });
  }

  constructor(props) {
    super(props);

    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    
    this.state = {
      dataSource: this.ds.cloneWithRows([]),
    };
  }

  _completion(rows) {
    this.setState({
      dataSource: this.ds.cloneWithRows(rows)
    });
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.gethealthLabelsFromApi()
      .then((rows) => this._completion(rows));
  }



  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(data) => <ListItemDemo title={data}></ListItemDemo>}
        automaticallyAdjustContentInsets={true}
      />
    );
  }
}


export default ListViewDemo;
