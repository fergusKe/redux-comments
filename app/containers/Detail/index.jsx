import React, { Component } from 'react';
import Header from '../../components/Header';
import Info from './subpage/Info.jsx';

class Detail extends Component {
  render() {
    const { history, match } = this.props;

    return (
      <div>
        <Header title="商户详情" />
        <Info id={match.params.id} />
        Detail
      </div>
    );
  }
}

export default Detail;
