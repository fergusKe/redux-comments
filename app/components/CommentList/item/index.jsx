import React, { Component } from 'react';

import Star from '../../Star';

import './style.less';

class CommentItem extends Component {
  render() {
    const { data } = this.props;

    return (
      <div className="comment-item">
        <h3>
          <i className="icon-user" />
          &nbsp;
          {data.username}
        </h3>
        <Star star={data.star} />
        <p>{data.comment}</p>
      </div>
    );
  }
}

export default CommentItem;
