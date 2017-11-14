import React, { Component } from 'react';

import './style.less';

class Star extends Component {
  state = {
    star: 0
  }

  componentDidMount() {
    this.setState({
      star: this.props.star
    });
  }

  clickHandle = (star) => {
    const { clickCallback } = this.props;

    if (!clickCallback) return;

    this.setState({
      star
    });

    clickCallback(star);
  }

  render() {
    // 获取 star 数量，并取余5（最多5个star）
    let star = this.state.star || 0;
    if (star > 5) {
      star %= 5;
    }

    return (
      <div className="star-container">
        {[1, 2, 3, 4, 5].map((item, index) => {
          const lightClass = star >= item ? ' light' : '';
          return <i key={index} className={`icon-star${lightClass}`} onClick={() => this.clickHandle(item)} />;
        })}
      </div>
    );
  }
}

export default Star;
