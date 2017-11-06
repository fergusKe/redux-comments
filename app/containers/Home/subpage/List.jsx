import React, { Component } from 'react';
import { getListData } from '../../../fetch/home/home.js';

import './style.less';

class List extends Component {
  state = {
    data: [],
    hasMore: false
  }

  componentDidMount() {
    this.loadFirstPageData();
  }

  // 获取首页数据
  loadFirstPageData = () => {
    const { cityName } = this.props;
    const result = getListData(cityName, 0);
    this.resultHandle(result);
  }

  resultHandle = (result) => {
    result
      .then(res => res.json())
      .then((json) => {
        const { data, hasMore } = json;

        this.setState({
          data,
          hasMore
        });
      });
  }

  render() {
    // const { cityName } = this.props;

    return (
      <div>
        <h2 className="home-list-title">猜你喜欢</h2>
      </div>
    );
  }
}

export default List;
