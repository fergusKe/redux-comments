import React, { Component } from 'react';
import Item from '../../components/List/item';

import './style.less';

class List extends Component {
  render() {
    const { data } = this.props;
    console.log('data = ', data);

    return (
      <div>
        {data.map((item, index) => (
          <Item key={index} data={item} />
        ))}
      </div>
    );
  }
}

export default List;
