import React, { Component } from 'react';
import { getInfoData } from '../../../fetch/detail/detail.js';

class Info extends Component {
  state = {
    info: false
  }

  componentDidMount() {
    const { id } = this.props;
    const result = getInfoData(id);

    result
      .then(res => res.json())
      .then((json) => {
        this.setState({
          info: json
        });
      });
  }

  render() {
    const { id } = this.props;
    const { info } = this.state;

    return (
      <div>
        {
          info
          ? <div>有數據了</div>
          : ''
        }
      </div>
    );
  }
}

export default Info;
