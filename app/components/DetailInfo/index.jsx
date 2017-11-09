import React, { Component } from 'react';
import Star from '../Star';

import './style.less';

const img = require('../../static/img/3.png');

const imgUrl = `/${img}`;

class DetailInfo extends Component {
  render() {
    const { data } = this.props;

    return (
      <div id="detail-info-container">
        <div className="info-container clear-fix">
          <div className="info-img-container float-left">
            <img src={imgUrl} alt={data.title} />
          </div>
          <div className="info-content">
            <h1>{data.title}</h1>
            <div className="star-container">
              {/* 引用 Star 组件 */}
              <Star star={data.star} />
              <span className="price">￥{data.price}</span>
            </div>
            <p className="sub-title">{data.subTitle}</p>
          </div>
        </div>
        {/* 设置 innerHTML */}
        <p dangerouslySetInnerHTML={{__html: data.desc}} className="info-desc" />
      </div>
    );
  }
}

export default DetailInfo;
