import React, { Component } from 'react';

import OrderListComponent from '../../../components/OrderList';
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
        this.setState({
          data: json
        });
      });
  }

  render() {
    const { data } = this.state;

    return (
      <div className="order-list-container">
        <h2>您的订单</h2>
        {
          data.length
          ? <OrderListComponent data={data} />
          : <div>{/* loading */}</div>
        }
      </div>
    );
  }
}

export default OrderList;
