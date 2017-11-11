import React, { Component } from 'react';
import SearchHeader from '../../components/SearchHeader';
import SearchList from './subpage/List.jsx';

class Search extends Component {
  render() {
    const { history, match } = this.props;

    return (
      <div>
        <SearchHeader history={history} keyword={match.params.keyword} />
        <SearchList keyword={match.params.keyword} category={match.params.category} />
      </div>
    );
  }
}

export default Search;
