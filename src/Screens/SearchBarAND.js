import React, { Component } from 'react';
import SearchBar from 'react-native-material-design-searchbar';
 
export default class SearchBarAND extends Component {
  render() {
    return (
      <SearchBar
        onSearchChange={(text) => this.props.search(text)}
        height={50}
        onFocus={() => console.log('On Focus')}
        onBlur={() => console.log('On Blur')}
        placeholder={'Search...'}
        autoCorrect={true}
        padding={5}
        returnKeyType={'search'}
        
      />
    );
  }
}

