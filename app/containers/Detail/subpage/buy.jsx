import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import BuyAndStore from '../../../components/BuyAndStore';
import * as storeActionsFromFile from '../../../actions/store.js';

class Buy extends Component {
  state = {
    isStore: false
  }

  // 购买事件
  buyHandle = () => {
    // 验证登录，未登录则return
    const loginFlag = this.storeHandle();
    if (!loginFlag) return;

    // 此过程为模拟购买，因此可省去复杂的购买过程

    // 跳转到用户主页
    this.props.history.push('/user');
  }

  // 收藏事件
  storeHandle = () => {

  }

  // 检查登录状态
  loginCheck = () => {
    const { id, userinfo } = this.props;

    if (!userinfo.username) {
      // 跳转到登录页面的时候，要传入目标router，以便登录完了可以自己跳转回来
      this.props.history.push(`/login/${encodeURIComponent(`/detail/${id}`)}`);
      return false;
    }
    return true;
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

const mapStateToProps = state => ({
  userinfo: state.userinfo,
  store: state.store
});

const mapDispatchToProps = dispatch => ({
  storeActions: bindActionCreators(storeActionsFromFile, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buy);
