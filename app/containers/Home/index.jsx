import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from '../../components/HomeHeader';

class Home extends Component {
  render() {
    return (
      <div>
        <HomeHeader cityName={this.props.userinfo.cityName} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userinfo: state.userinfo
});

export default connect(mapStateToProps)(Home);
