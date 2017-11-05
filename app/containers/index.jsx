import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LocalStore from '../util/localStore.js';
import { CITYNAME } from '../config/localStoreKey.js';

import * as userInfoActionsFormOtherFile from '../actions/userinfo.js';

class App extends Component {
  state = {
    initDone: false
  }

  componentDidMount() {
    let cityName = LocalStore.getItem(CITYNAME);
    if (cityName == null) {
      cityName = '北京';
    }
    console.log('cityName = ', cityName);

    this.props.userInfoActions.update({
      cityName
    });

    this.setState({
      initDone: true
    });
  }

  render() {
    return (
      <div>
        {
          this.state.initDone
          ? this.props.children
          : <div>加載中...</div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  prop: state.prop
});

const mapDispatchToProps = dispatch => ({
  userInfoActions: bindActionCreators(userInfoActionsFormOtherFile, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
