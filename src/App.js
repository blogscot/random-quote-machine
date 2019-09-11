import React from 'react'
import {
  TwitterShareButton,
  TumblrShareButton,
  TwitterIcon,
  TumblrIcon,
} from 'react-share'
import './App.css'

class App extends React.Component {
  index = 0
  quotes = []
  state = {
    author: '',
    quote: '',
  }
  constructor(props) {
    super(props)
    this.displayQuote = this.displayQuote.bind(this)
  }
  async componentDidMount() {
    await this.loadQuotes()
    this.displayQuote()
  }
  async displayQuote() {
    const { author, body: quote } = this.quotes[this.index]
    this.setState({
      author,
      quote,
    })

    this.index = this.index + 1
    if (this.index >= this.quotes.length) {
      await this.loadQuotes()
      this.index = 0
    }
  }
  async loadQuotes() {
    const quoteURL = 'https://favqs.com/api/quotes'
    const accessKey = 'Token token=a7cdfe2bcd1b4cef333643b0498da614'
    let data = await fetch(quoteURL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessKey,
      },
    }).catch(error => console.error('Error loading quotes: ', error))
    data = await data.json()
    this.quotes = data.quotes
  }
  render() {
    const { author, quote } = this.state
    if (!quote) {
      return <div>Loading Quotes ...</div>
    }
    const title = `${'"' + quote + '" ' + author}`
    return (
      <div className="App" id="quote-box">
        <div id="text">
          <span className="quote-mark">"</span>
          {quote}
          <span className="quote-mark">"</span>
        </div>
        <div id="author">{author}</div>
        <div id="buttons">
          <div id="social-media">
            <TwitterShareButton
              url={'https://favqs.com'}
              title={title}
              className="twitter-button"
            >
              <TwitterIcon size={48} round />
            </TwitterShareButton>
            <TumblrShareButton
              url={'https://favqs.com'}
              title={title}
              caption={'Favourite Quotes'}
              className="tumblr-button"
            >
              <TumblrIcon size={48} round />
            </TumblrShareButton>
          </div>
          <button id="new-quote" onClick={this.displayQuote}>
            New Quote
          </button>
        </div>
      </div>
    )
  }
}

export default App
