import React, { Component } from 'react';
import BuyAndStore from '../../../components/BuyAndStore';

class Buy extends Component {
  state = {
    isStore: false
  }

  // 购买事件
  buyHandle = () => {

  }

  // 收藏事件
  storeHandle = () => {

  }

  render() {
    const { isStore } = this.state;

    return (
      <div>
        <BuyAndStore isStore={isStore} buyHandle={this.buyHandle} storeHandle={this.storeHandle} />
      </div>
    );
  }
}

export default Buy;
