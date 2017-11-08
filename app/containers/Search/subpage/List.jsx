import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListComponent from '../../../components/List';
import LoadMore from '../../../components/LoadMore';

import { getSearchData } from '../../../fetch/search/search.js';

// 初始化一个组件的 state
const initialState = {
  data: [],
  hasMore: false,
  isLoadingMore: false,
  page: 1
};

class SearchList extends Component {
  state = initialState

  componentDidMount() {
    this.loadFirstPageData();
  }

  // 处理重新搜索
  componentDidUpdate(prevProps, prevState) {
    const keyword = this.props.keyword;
    const category = this.props.category;

    // 搜索条件完全相等时，忽略。重要！！！
    if (keyword === prevProps.keyword && category === prevProps.category) return;

    // 重置 state
    this.setState(initialState);

    // 重新加载数据
    this.loadFirstPageData();
  }

  // 获取首页数据
  loadFirstPageData = () => {
    const cityName = this.props.userinfo.cityName;
    const keyword = this.props.keyword || '';
    const category = this.props.category;
    const result = getSearchData(0, cityName, category, keyword);
    this.resultHandle(result);
  }

  // 加载更多数据
  loadMoreData = () => {
    // 记录状态
    this.setState({
      isLoadingMore: true
    });

    const cityName = this.props.userinfo.cityName;
    const page = this.state.page;
    const keyword = this.props.keyword || '';
    const category = this.props.category;
    const result = getSearchData(page, cityName, category, keyword);
    this.resultHandle(result);

    // 更新状态
    this.setState({
      isLoadingMore: false
    });
  }

  // 处理数据
  resultHandle = (result) => {
    // 增加 page 计数
    const page = this.state.page;
    this.setState({
      page: page + 1
    });

    result.then(res => res.json()).then((json) => {
      const hasMore = json.hasMore;
      const data = json.data;

      this.setState({
        hasMore,
        // 注意，这里讲最新获取的数据，拼接到原数据之后，使用 concat 函数
        data: this.state.data.concat(data)
      });
    }).catch((ex) => {
      if (__DEV__) {
        console.error('搜索页获取数据报错, ', ex.message);
      }
    });
  }

  render() {
    const { data, hasMore, isLoadingMore } = this.state;

    return (
      <div>
        {
          data.length
          ? <ListComponent data={data} />
          : <div>加載中...</div>
        }
        {
          hasMore
          ? <LoadMore isLoadingMore={isLoadingMore} loadMoreFn={this.loadMoreData} />
          : ''
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userinfo: state.userinfo
});

export default connect(mapStateToProps)(SearchList);
