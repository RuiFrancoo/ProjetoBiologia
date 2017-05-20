
import React from 'react';
import { View, TextInput, ListView, Platform, StyleSheet, Text, TouchableHighlight } from 'react-native';

import SearchBarIOS from '../Screens/SearchBarIOS';
import SearchBarAND from '../Screens/SearchBarAND';
import ListItemDemo from "./ListItemDemo";
import data from './aditivos'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    height: 50, 
    backgroundColor: '#e57373',
    fontSize: 17,
    borderColor: '#e57373', 
    borderWidth: 0.5,

  },
});

class ListViewDemo extends React.Component {

  _gethealthLabelsFromApi() {
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

  _getAditives() { 
    return new Promise(function(resolve, reject) {
      resolve(data);
    });
  }

  constructor(props) {
    super(props);

    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    
    this.state = {
      dataSource: this.ds.cloneWithRows([])
    };
  }

  _completion(rows) {
    this.setState({
      dataSource: this.ds.cloneWithRows(rows)
    });
  }

  componentDidMount() {
    // this._gethealthLabelsFromApi()
    this._getAditives()
      .then((rows) => this._completion(rows));
  }

  filterSearch(text) {
    const newData = data.filter(function(item){
        const itemData = item.code.toUpperCase() + item.name.toUpperCase()
        const textData = text.toUpperCase()
        return itemData.indexOf(textData) > -1
    })
    this.setState({
        dataSource: this.state.dataSource.cloneWithRows(newData)
    })
  }

  _searchbar() {

  }

  render() {
    return (
      <View>
        <TextInput 
            style={styles.textInput}
            onChangeText={(text) => this.filterSearch(text)}
            value={this.state.text}
            autoCapitalize="none"
            placeholder={"Procura aqui!!"}
            placeholderTextColor={'white'}
            selectionColor={'white'}
            underlineColorAndroid={'white'}
        />
        <ListView
          enableEmptySections={true}
          style={styles.container}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
          automaticallyAdjustContentInsets={true}
        />
      </View>
    );
  }

  _renderRow(rowData, sectionID: number, rowID: number) {
    console.log('render row with data: ' + rowData);
    return (
      // <TouchableHighlight onPress={this._onPressRow.bind(this.rowID, rowData)}>
      <View>
        <ListItemDemo aditive={rowData}></ListItemDemo>
      </View>
      // </TouchableHighlight>
    );
  }

  _onPressRow(rowID, rowData) {
    // var dataClone = this.state.data;
    // dataClone[rowID] = rowData;
    // this.setState({
    //   data: dataClone
    // });
    console.log("press " + rowID);
  }
}


export default ListViewDemo;
