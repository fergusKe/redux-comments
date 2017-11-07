import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Header from '../../components/Header';
import CurrentCity from '../../components/CurrentCity';
import CityList from '../../components/CityList';

import LocalStore from '../../util/localStore.js';
import { CITYNAME } from '../../config/localStoreKey.js';
import * as userInfoActionsFromOtherFile from '../../actions/userinfo.js';

class City extends Component {
  changeCity = (newCity) => {
    if (newCity == null) return;

    // 修改 redux
    const { userinfo, userInfoActions } = this.props;
    userinfo.cityName = newCity;
    userInfoActions.update(userinfo);

    // 修改 cookie
    LocalStore.setItem(CITYNAME, newCity);

    // 跳轉到首頁

  }

  render() {
    const { userinfo } = this.props;

    return (
      <div>
        <Header title="選擇城市" />
        <CurrentCity cityName={userinfo.cityName} />
        <CityList changeFn={this.changeCity} />
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

