import React, { Component } from 'react';

import './style.less';

class HomeHeader extends Component {
  render() {
    return (
      <div className="clear-fix">
        <div className="float-left">
          深圳
          <i className="icon-angle-down" />
        </div>
        <div className="float-right">
          <i className="icon-user" />
        </div>
        <div>
          <i className="icon-search" />
          <input />
        </div>
      </div>
    );
  }
}

export default HomeHeader;
