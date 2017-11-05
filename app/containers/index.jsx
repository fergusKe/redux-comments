import React, { Component } from 'react';

class App extends Component {
  state = {
    initDone: false
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ initDone: true });
    }, 1000);
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

export default App;
