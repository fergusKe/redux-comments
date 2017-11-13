import React, { Component } from 'react';

import './style.less';

class BuyAndStore extends Component {
  storeClickHandle = () => {
    this.props.storeHandle();
  }

  buyClickHandle = () => {
    const { buyHandle } = this.props;
    buyHandle();
  }

  render() {
    const { isStore } = this.props;
    console.log('isStore = ', isStore);

    return (
      <div className="buy-store-container clear-fix">
        <div className="item-container float-left">
          {
            // 是否已经收藏了
            this.props.isStore
            ? <button className="selected" onClick={this.storeClickHandle}>已收藏</button>
            : <button onClick={this.storeClickHandle}>收藏</button>
          }
        </div>
        <div className="item-container float-right">
          <button onClick={this.buyClickHandle}>购买</button>
        </div>
      </div>
    );
  }
}

export default BuyAndStore;
