import React, { Component } from 'react';
import SearchInput from '../SearchInput';

import './style.less';

class SearchHeader extends Component {
  clickHandle = () => {
    window.history.back();
  }

  enterHandle = (value) => {
    this.props.history.push(`/search/all/${encodeURIComponent(value)}`);
  }

  render() {
    const { keyword } = this.props;

    return (
      <div id="search-header" className="clear-fix">
        <span className="back-icon float-left" onClick={this.clickHandle}>
          <i className="icon-chevron-left" />
        </span>
        <div className="input-container">
          <i className="icon-search" />
          &nbsp;
          <SearchInput value={keyword || ''} enterHandle={this.enterHandle} />
        </div>
      </div>
    );
  }
}

export default SearchHeader;
