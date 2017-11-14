import React, { Component } from 'react';

import Item from './item';

class OrderList extends Component {
  render() {
    const { data } = this.props;

    return (
      <div>
        {data.map((item, index) => (
          <Item key={index} data={item} />
        ))}
      </div>

    );
  }
}

export default OrderList;
