import React, {Component} from 'react';
import Search from './../components/Search';

class Home extends Component {
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

  search = () => {
    fetch(`https://itunes.apple.com/search?term=${this.state.value}&entity=movie,ebook`)
    .then(resp => resp.json())
    .then(({ results }) => {
      this.setState({
        movies: results.filter(e => e.kind.indexOf('movie') > -1),
        books: results.filter(e => e.kind.indexOf('book') > -1)
      })
    })
  }

  componentDidUpdate() {
    this.search()
  }
  render () {
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
    )
  }
}

export default Home;