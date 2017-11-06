import React, { Component } from 'react';

import './style.less';

class LoadMore extends Component {
  loadMoreHandle = () => {
    // 执行传输过来的 loadMoreFn
    this.props.loadMoreFn();
  }

  componentDidMount() {
    const loadMoreFn = this.props.loadMoreFn;
    const wrapper = this.refs.wrapper;
    let timeoutId;

    function callback() {
      const top = wrapper.getBoundingClientRect().top;
      const windowHeight = window.screen.height;
      if (top && top < windowHeight) {
        loadMoreFn();
      }
    }

    window.addEventListener('scroll', () => {
      if (this.props.isLoadingMore) return;

      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(callback, 50);
    }, false);
  }


  render() {
    return (
      <div className="load-more" ref="wrapper">
        {
          this.props.isLoadingMore
          ? <span>加載中...</span>
          : <span onClick={this.loadMoreHandle}>加載更多</span>
        }
      </div>
    );
  }
}

export default LoadMore;
