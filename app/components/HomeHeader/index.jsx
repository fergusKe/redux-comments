import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SearchInput from '../SearchInput';

import './style.less';

class HomeHeader extends Component {
  enterHandle = (value) => {
    this.props.history.push(`/search/all/${encodeURIComponent(value)}`);
  }

  render() {
    const { cityName } = this.props;

    return (
      <div id="home-header" className="clear-fix">
        <div className="home-header-left float-left">
          <Link to="/city">
            <span>{cityName}</span>
            &nbsp;
            <i className="icon-angle-down" />
          </Link>
        </div>
        <div className="home-header-right float-right">
          <i className="icon-user" />
        </div>
        <div className="home-header-middle">
          <div className="search-container">
            <i className="icon-search" />
            <SearchInput value="" enterHandle={this.enterHandle} />
          </div>
        </div>
      </div>
    );
  }
}

export default HomeHeader;
