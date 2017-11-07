import React, { Component } from 'react';

import './style.less';

class LoadMore extends Component {
  loadMoreHandle = () => {
    // 执行传输过来的 loadMoreFn
    this.props.loadMoreFn();
  }

  componentDidMount() {
    const callback = this.callback;
    let timeoutId;

    window.addEventListener('scroll', () => {
      if (this.props.isLoadingMore) return;

      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(callback, 50);
    }, false);
  }

  callback = () => {
    const loadMoreFn = this.props.loadMoreFn;
    const wrapper = this.wrapper;
    const top = wrapper.getBoundingClientRect().top;
    const windowHeight = window.screen.height;

    if (top && top < windowHeight) {
      loadMoreFn();
    }
  }


  render() {
    return (
      <div className="load-more" ref={wrapper => (this.wrapper = wrapper)}>
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
