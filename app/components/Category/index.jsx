import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';

import './style.less';

class Category extends Component {
  state = {
    index: 0
  }
  render() {
    const opt = {
      auto: 2000,
      callback: (index) => {
        this.setState({ index });
      }
    };
    return (
      <ReactSwipe className="carousel" swipeOptions={opt}>
        <div>PANE 1</div>
        <div>PANE 2</div>
        <div>PANE 3</div>
      </ReactSwipe>
    );
  }
}

export default Category;
