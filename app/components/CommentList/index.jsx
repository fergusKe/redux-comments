import React, { Component } from 'react';

import Item from './item';

class CommentList extends Component {
  render() {
    const { data } = this.props;

    return (
      <div className="comment-list">
        {data.map((item, index) => (
          <Item key={index} data={item} />
        ))}
      </div>
    );
  }
}

export default CommentList;
