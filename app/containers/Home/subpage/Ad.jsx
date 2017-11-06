import React, { Component } from 'react';
import { getAdData } from '../../../fetch/home/home.js';

class Ad extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    const result = getAdData();
    result
      .then(res => res.json())
      .then((json) => {
        const data = json;
        if (data.length) {
          this.setState({
            data
          });
        }
      });

  }

  render() {
    return (
      <div>
        {this.state.data.length}
      </div>
    );
  }
}

export default Ad;
