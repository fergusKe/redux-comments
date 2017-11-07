import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import HomeHeader from '../../components/HomeHeader';
import Category from '../../components/Category';
import Ad from './subpage/Ad.jsx';
import List from './subpage/List.jsx';

class Home extends Component {
  render() {
    return (
      <div>
        <HomeHeader cityName={this.props.userinfo.cityName} />
        <Category />
        <div style={{height: '15px'}} />
        <Ad />
        <List cityName={this.props.userinfo.cityName} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userinfo: state.userinfo
});

export default withRouter(connect(mapStateToProps)(Home));
