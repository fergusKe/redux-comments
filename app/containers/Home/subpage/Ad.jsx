import React, { Component } from 'react';
import { getAdData } from '../../../fetch/home/home.js';
import HomeAd from '../../../components/HomeAd';

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
    const { data } = this.state;

    return (
      <div>
        {
          data.length
          ? <HomeAd data={data} />
          : <div>加載中...</div>
        }
      </div>
    );
  }
}

export default Ad;
