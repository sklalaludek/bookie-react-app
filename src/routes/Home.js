import React, {Component} from 'react';
import Search from './../components/Search';

class Home extends Component {
  constructor() {
    super()
    this.input = React.createRef()
    this.state = {
      content: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    const value = this.input.current.value
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}`)
    .then(resp => resp.json())
    .then(({ items }) => {
      const link = items.length && items.filter(({ volumeInfo: { infoLink } }) => (
        infoLink.indexOf('https://play.google.com/') !== -1
      ))[0].volumeInfo.infoLink

      fetch('https://cors-anywhere.herokuapp.com/' + link)
      .then(resp => resp.text())
      .then(content => this.setState({ content }, () => this.getSimilar()))
    })
  }

  getSimilar = () => {
    const similarFrame = Array.from(document.querySelectorAll('.uTDLzc.K1b9Kc'))
      .filter(el => el.querySelector('h2').textContent === 'Podobne')
    const similarBooks = similarFrame[0] && Array.from(similarFrame[0].querySelectorAll('.IFTL7.XWV5qb > .WHE7ib.mpg5gc .Vpfmgd'))
      .map(el => ({
        title: el.querySelector('[title]').title,
        author: el.querySelector('.b8cIId.ReQCgd.KoLSrc').textContent,
        image: el.querySelector('img[src]').src
      }))

    console.log(similarBooks)
    document.getElementById('similar').innerHTML = ''
    return similarBooks
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
          <Search onInputSubmit={this.handleSubmit} input={this.input} />
          <div className="results">
            <div dangerouslySetInnerHTML={{ __html: this.state.content }} id="similar" />
          </div>
        </main>
      </div>
    )
  }
}

export default Home;