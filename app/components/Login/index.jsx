import React, { Component } from 'react';

import './style.less';

class Login extends Component {
  state = {
    username: ''
  }

  changeHandle = (e) => {
    this.setState({
      username: e.target.value
    });
  }

  clickHandle = () => {
   const { username } = this.state;
   const { loginHandle } = this.props;
   loginHandle(username);
  }

  render() {
    return (
      <div id="login-container">
        <div className="input-container phone-container">
          <i className="icon-tablet" />
          <input
            type="text"
            placeholder="输入手机号"
            onChange={this.changeHandle}
            value={this.state.username}
            />
        </div>
        <div className="input-container password-container">
          <i className="icon-key" />
          <button>发送验证码</button>
          <input type="text" placeholder="输入验证码" />
        </div>
        <button className="btn-login" onClick={this.clickHandle}>登录</button>
      </div>
    );
  }
}

export default Login;
