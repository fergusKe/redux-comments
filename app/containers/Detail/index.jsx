import React, { Component } from 'react';
import Header from '../../components/Header';
import Info from './subpage/Info.jsx';
import Comment from './subpage/Comment.jsx';
import Buy from './subpage/buy.jsx';

class Detail extends Component {
  render() {
    const { history, match } = this.props;

    return (
      <div>
        <Header title="商户详情" />
        <Info id={match.params.id} />
        <Buy id={match.params.id} />
        <Comment id={match.params.id} />
      </div>
    );
  }
}

export default Detail;
