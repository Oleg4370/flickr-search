import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Search from './components/search-block/search';
import Images from './components/images/images';

import { SEARCH_PARAMS, SEARCH_URL } from './config/credentials';
import { getUrlString } from './config/utils';

class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      photos: [],
      canSearch: true
    };
  }

  searchImages(text) {
    SEARCH_PARAMS.text = text;
    if (text.length === 0){
      this.setState({photos: []});
      return
    }
    fetch(SEARCH_URL+'?' + getUrlString(SEARCH_PARAMS))
      .then(res => res.json())
      .then(res => {
        this.setState({photos: res.photos.photo})
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Search callBack={this.searchImages.bind(this)}/>
        <Images photos={this.state.photos}/>
      </div>
    );
  }
}

export default App;
