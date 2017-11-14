import React, { Component } from 'react';

class UserIndo extends Component {
  render() {
    const { username, city } = this.props;

    return (
      <div className="userinfo-container">
        <p>
          <i className="icon-user" />
          &nbsp;
          <span>{this.props.username}</span>
        </p>
        <p>
          <i className="icon-map-marker" />
          &nbsp;
          <span>{this.props.city}</span>
        </p>
      </div>
    );
  }
}

export default UserIndo;
