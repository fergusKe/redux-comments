import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Header from '../../components/Header';
import UserInfo from '../../components/UserInfo';

class User extends Component {
  componentDidMount() {
    // 如果未登录，跳转到登录页面
    if (!this.props.userinfo.username) {
      this.props.history.push('/login');
    }
  }

  render() {
    const { username, cityName} = this.props.userinfo;

    return (
      <div>
        <Header title="用户主页" backRouter="/" history={this.props.history} />
        <UserInfo username={username} city={cityName} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userinfo: state.userinfo
});

export default withRouter(connect(mapStateToProps)(User));
