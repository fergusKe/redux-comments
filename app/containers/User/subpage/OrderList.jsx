import React, { Component } from 'react';

import { getOrderListData } from '../../../fetch/user/orderlist';
import './style.less';

class OrderList extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    // 获取订单数据
    const { username } = this.props;
    if (username) {
      this.loadOrderList(username);
    }
  }

  // 获取列表数据
  loadOrderList = (username) => {
    const result = getOrderListData(username);
    result
      .then(res => res.json())
      .then((json) => {
        console.log('json = ', json);
      });
  }

  render() {
    return (
      <div className="order-list-container">
        <h2>您的订单</h2>
        {
          this.state.data.length
          ? <div>顯示訂單</div>
          : <div>{/* loading */}</div>
        }
      </div>
    );
  }
}

export default OrderList;
