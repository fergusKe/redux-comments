import React, { Component } from 'react';

import './style.less';

class SearchInput extends Component {
  render() {
    return (
      <input
        className="search-input"
        type="text"
        placeholder="請輸入關鍵字"
      />
    );
  }
}

export default SearchInput;
