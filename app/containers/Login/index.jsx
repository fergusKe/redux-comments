import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import * as userInfoActionsFromOtherFile from '../../actions/userinfo';

class Login extends Component {
  render() {
    return (
      <div>
        Login
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
