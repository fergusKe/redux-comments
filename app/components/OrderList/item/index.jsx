import React, { Component } from 'react';

import './style.less';

const img = require('../../../static/img/3.png');

const imgUrl = `/${img}`;

class Item extends Component {
  render() {
    const { data } = this.props;

    return (
      <div className="order-item-container">
        <div className="clear-fix">
          <div className="order-item-img float-left">
            <img src={imgUrl} alt={data.title} />
          </div>
          <div className="order-item-content">
            <span>商户：{data.title}</span>
            <span>数量：{data.count}</span>
            <span>价格：￥{data.price}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
