import React, { Component } from 'react';

import './style.less';

const img = require('../../static/img/3.png');

const imgUrl = `/${img}`;

class DetailInfo extends Component {
  render() {
    const { data } = this.props;

    return (
      <div>
        <img src={imgUrl} alt={data.title} style={{width: '100px'}} />
        <h1>{data.title}</h1>
        <p>{data.star}</p>
        <p>{data.price}</p>
        <p>{data.subTitle}</p>
        <p dangerouslySetInnerHTML={{__html: data.desc}} />
      </div>
    );
  }
}

export default DetailInfo;
