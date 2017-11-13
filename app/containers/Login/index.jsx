import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import Header from '../../components/Header';
import LoginComponent from '../../components/Login';

import * as userInfoActionsFromOtherFile from '../../actions/userinfo';

class Login extends Component {
  state = {
    checking: true
  }

  componentDidMount() {
    this.doCheck();
  }

  doCheck = () => {
    const { userinfo } = this.props;

    if (userinfo.username) {
      // 已经登录，则跳转到用户主页
      this.goUserPage();
    } else {
      // 未登录，则验证结束
      this.setState({
        checking: false
      });
    }
  }

  // 处理登录之后的事情
  loginHandle = (username) => {
    // 保存用户名
    const actions = this.props.userInfoActions;
    const userinfo = {...this.props.userinfo, username};
    actions.update(userinfo);

    const { router } = this.props.match.params;

    if (router) {
      // 跳转到指定的页面
      this.props.history.push(decodeURIComponent(router));
    } else {
      // 跳转到用户主页
      this.goUserPage();
    }
  }

  goUserPage = () => {
    this.props.history.push('/user');
  }

  render() {
    const { history } = this.props;
    const { checking } = this.state;

    return (
      <div>
        <Header title="登錄" history={history} />
        {
          checking
          ? <div>{/* 等待中 */}</div>
          : <LoginComponent loginHandle={this.loginHandle} />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userinfo: state.userinfo
});

const mapDispatchToProps = dispatch => ({
  userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Login));
