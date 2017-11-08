import React, { Component } from 'react';

import './style.less';

class SearchInput extends Component {
  state = {
    value: ''
  }

  componentDidMount() {
    const { value } = this.props;

    this.setState({
      value: value || ''
    });
  }


  changeHandle = (e) => {
    const { value } = e.target;

    this.setState({
      value
    });
  }

  keyUpHandle = (e) => {
    if (e.keyCode !== 13) return;

    const { value } = e.target;
    const { enterHandle } = this.props;

    enterHandle(value);
  }

  render() {
    const { value } = this.state;
    return (
      <input
        className="search-input"
        type="text"
        value={value}
        placeholder="請輸入關鍵字"
        onChange={this.changeHandle}
        onKeyUp={this.keyUpHandle}
      />
    );
  }
}

export default SearchInput;
