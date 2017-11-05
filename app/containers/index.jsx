import React, { Component } from 'react';
import LocalStore from '../util/localStore.js';
import { CITYNAME } from '../config/localStoreKey.js';

class App extends Component {
  state = {
    initDone: false
  }

  componentDidMount() {
    let cityName = LocalStore.getItem(CITYNAME);
    if (cityName == null) {
      cityName = '北京';
    }

    this.setState({
      initDone: true
    });
  }

  render() {
    return (
      <div>
        {
          this.state.initDone
          ? this.props.children
          : <div>加載中...</div>
        }
      </div>
    );
  }
}

export default App;
