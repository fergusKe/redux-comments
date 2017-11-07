import React, { Component } from 'react';

import './style.less';

class CurrentCity extends Component {
  render() {
    const { cityName } = this.props;

    return (
      <div className="current-city">
        <h2>{cityName}</h2>
      </div>
    );
  }
}

export default CurrentCity;
