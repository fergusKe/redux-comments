import React, { Component } from 'react';

import './style.less';

class Item extends Component {
  render() {
    const { data } = this.props;

    return (
      <div>
        {data.title}
      </div>
    );
  }
}

export default Item;
