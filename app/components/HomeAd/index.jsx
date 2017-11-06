import React, { Component } from 'react';

import './style.less';

// 获取本地图片
const img = require('../../static/img/2.png');

class HomeAd extends Component {
  render() {
    const { data } = this.props;

    return (
      <div id="home-ad">
        <h2>超值特惠</h2>
        <div className="ad-container clear-fix">
          {data.map((item, index) => (
            <div key={index} className="ad-item float-left">
              <a href={item.link} target="_blank">
                <img src={img} alt={img.title} />
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default HomeAd;
