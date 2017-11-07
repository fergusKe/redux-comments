import React, { Component } from 'react';

import './style.less';

class Header extends Component {
  clickHandle = () => {
    const { backRouter, history } = this.props;

    if (backRouter) {
      history.push(backRouter);
    } else {
      window.history.back();
    }
  }

  render() {
    return (
      <div id="common-header">
        <span className="back-icon" onClick={this.clickHandle}>
          <i className="icon-chevron-left" />
        </span>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export default Header;
