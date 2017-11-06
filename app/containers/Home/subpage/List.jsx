import React, { Component } from 'react';
import { getListData } from '../../../fetch/home/home.js';

import ListComponent from '../../../components/List';
import LoadMore from '../../../components/LoadMore';

import './style.less';

class List extends Component {
  state = {
    data: [], // 存储数据
    hasMore: false, // 记录当前状态下，是否还有更多数据，这个需要后端返回。true 即还有，false 即没了
    isLoadingMore: false, // 记录当前状态下，是否正在加载中。true 即正在加载中，false 即不是加载中状态
    page: 1 // 记录下一页的页码，首页的页码是 0
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

  // 加载更多数据
  loadMoreData = () => {
    // 记录状态
    this.setState({
      isLoadingMore: true
    });

    const { cityName } = this.props;
    const { page } = this.state;
    const result = getListData(cityName, page);

    this.resultHandle(result);

    // 增加 page
    this.setState({
      isLoadingMore: false,
      page: page + 1
    });
  }

  // 处理数据
  resultHandle = (result) => {
    result
      .then(res => res.json())
      .then((json) => {
        const { data, hasMore } = json;

        this.setState({
          data: this.state.data.concat(data),
          hasMore
        });
      });
  }

  render() {
    const { data, isLoadingMore } = this.state;

    return (
      <div>
        <h2 className="home-list-title">猜你喜欢</h2>
        {
          data.length
          ? <ListComponent data={data} />
          : <div>加載中...</div>
        }
        {
          this.state.hasMore
          ? <LoadMore isLoadingMore={isLoadingMore} loadMoreFn={this.loadMoreData} />
          : ''
        }
      </div>
    );
  }
}

export default List;
