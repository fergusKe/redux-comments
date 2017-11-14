import React, { Component } from 'react';

import Item from './item';

class OrderList extends Component {
  render() {
    const { data, submitComment } = this.props;

    return (
      <div>
        {data.map((item, index) => (
          <Item key={index} data={item} submitComment={submitComment} />
        ))}
      </div>
    );
  }
}

export default OrderList;
