import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from '../../components/HomeHeader';
import Category from '../../components/Category';

class Home extends Component {
  render() {
    return (
      <div>
        <HomeHeader cityName={this.props.userinfo.cityName} />
        <Category />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userinfo: state.userinfo
});

export default connect(mapStateToProps)(Home);
