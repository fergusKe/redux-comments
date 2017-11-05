import React, { Component } from 'react';

import './style.less';

class HomeHeader extends Component {
  render() {
    return (
      <div id="home-header" className="clear-fix">
        <div className="home-header-left float-left">
          <span>深圳</span>
          &nbsp;
          <i className="icon-angle-down" />
        </div>
        <div className="home-header-right float-right">
          <i className="icon-user" />
        </div>
        <div className="home-header-middle">
          <div className="search-container">
            <i className="icon-search" />
            <input type="text" placeholder="請輸入關鍵字" />
          </div>
        </div>
      </div>
    );
  }
}

export default HomeHeader;
