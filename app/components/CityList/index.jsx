import React, { Component } from 'react';

import './style.less';

class CityList extends Component {
  clickHandle = (newCity) => {
    const changeFn = this.props.changeFn;
    changeFn(newCity);
  }

  render() {
    return (
      <div className="city-list-container">
        <h3>热门城市</h3>
        <ul className="clear-fix">
          <li>
            <span onClick={() => this.clickHandle('北京')}>北京</span>
          </li>
          <li>
            <span onClick={() => this.clickHandle('上海')}>上海</span>
          </li>
          <li>
            <span onClick={() => this.clickHandle('杭州')}>杭州</span>
          </li>
          <li>
            <span onClick={() => this.clickHandle('广州')}>广州</span>
          </li>
          <li>
            <span onClick={() => this.clickHandle('苏州')}>苏州</span>
          </li>
          <li>
            <span onClick={() => this.clickHandle('深圳')}>深圳</span>
          </li>
          <li>
            <span onClick={() => this.clickHandle('南京')}>南京</span>
          </li>
          <li>
            <span onClick={() => this.clickHandle('天津')}>天津</span>
          </li>
          <li>
            <span onClick={() => this.clickHandle('重庆')}>重庆</span>
          </li>
          <li>
            <span onClick={() => this.clickHandle('厦门')}>厦门</span>
          </li>
          <li>
            <span onClick={() => this.clickHandle('武汉')}>武汉</span>
          </li>
          <li>
            <span onClick={() => this.clickHandle('西安')}>西安</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default CityList;
