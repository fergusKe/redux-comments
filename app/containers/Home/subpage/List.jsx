import React, { Component } from 'react';

class List extends Component {
  render() {
    const { cityName } = this.props;

    return (
      <div>
        List {cityName}
      </div>
    );
  }
}

export default List;
