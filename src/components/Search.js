import React, { Component } from 'react';

class Search extends Component {
  render () {
    const { value, onInputChange } = this.props
    return (
      <input
        aria-hidden="true"
        type="text"
        placeholder="search"
        onChange={event => onInputChange(event.target.value)}
        value={value}
      />
    )
  }
}

export default Search;