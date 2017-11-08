import React, { Component } from 'react';
import SearchHeader from '../../components/SearchHeader';

class Search extends Component {
  render() {
    const { match } = this.props;

    return (
      <div>
        <SearchHeader history={this.props.history} keyword={match.params.keyword} />
      </div>
    );
  }
}

export default Search;
