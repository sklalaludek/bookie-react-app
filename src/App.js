import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      books: [],
      value: ''
    }
  }

  handleChange = value => {
    this.setState({ value })
  }

  componentDidMount() {
    /*const baseUrl = 'https://api.themoviedb.org/3/search/multi?api_key=92b2df3080b91d92b31eacb015fc5497&query='
    fetch(`${baseUrl}Harry+Potter`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        movies: data.results
      })
    })*/

    fetch('https://itunes.apple.com/search?term=Harry+Potter&entity=movie,ebook')
    .then(resp => resp.json())
    .then(({ results }) => {
      this.setState({
        movies: results.filter(e => e.kind.indexOf('movie') > -1),
        books: results.filter(e => e.kind.indexOf('book') > -1)
      })
    })
  }

  render() {
    return (
      <div>
        <header>
          <a href="/">
            <h1>Bookie</h1>
          </a>
        </header>
        <main>
          <Search onInputChange={this.handleChange} value={this.state.value} />
          <div className="results">
            <h2>Movies</h2>
            {
              this.state.movies.map(e => (
                <a href={`/movie_id/${e.trackId}`} key={e.trackId}>
                  <li>{e.trackName}</li>
                </a>
              ))
            }
            <h2>Books</h2>
            {
              this.state.books.map((e, i) => (
                <a href={`/book_id/${e.trackId}`} key={e.trackId}>
                  <li>{e.trackName}</li>
                </a>
              ))
            }
          </div>
        </main>
      </div>
    );
  }
}


export default App;
