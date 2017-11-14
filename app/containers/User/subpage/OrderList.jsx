import React, { Component } from 'react';

import OrderListComponent from '../../../components/OrderList';
import { getOrderListData, postComment } from '../../../fetch/user/orderlist';
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
      }).catch((ex) => {
        if (__DEV__) {
          console.error('用户主页“订单列表”获取数据报错, ', ex.message);
        }
      });
  }

  // 提交评价
  submitComment = (id, value, callback) => {

  }

  render() {
    const { data } = this.state;

    return (
      <div className="order-list-container">
        <h2>您的订单</h2>
        {
          data.length
          ? <OrderListComponent data={data} submitComment={this.submitComment} />
          : <div>{/* loading */}</div>
        }
      </div>
    );
  }
}

export default OrderList;
