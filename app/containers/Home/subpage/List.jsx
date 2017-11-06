import React, { Component } from 'react';
import { getListData } from '../../../fetch/home/home.js';
import ListComponent from '../../../components/List';

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
    const { data } = this.state;

    return (
      <div>
        <h2 className="home-list-title">猜你喜欢</h2>
        {
          data.length
          ? <ListComponent data={data} />
          : <div>加載中...</div>
        }
      </div>
    );
  }
}

export default List;
