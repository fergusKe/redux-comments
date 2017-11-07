import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Header from '../../components/Header';
import CurrentCity from '../../components/CurrentCity';

import * as userInfoActionsFromOtherFile from '../../actions/userinfo.js';

class City extends Component {
  render() {
    const { userinfo } = this.props;

    return (
      <div>
        <Header title="選擇城市" />
        <CurrentCity cityName={userinfo.cityName} />
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
)(City));

