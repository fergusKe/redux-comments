import React, { Component } from 'react';

import Header from '../../components/Header';

class City extends Component {
  render() {
    return (
      <div>
        <Header title="選擇城市" />
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export default City;
