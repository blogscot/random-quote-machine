import React from 'react'
import './App.css'
import SocialMediaButtons from './components/SocialMediaButtons'
import Quote from './components/Quote'
import styled from 'styled-components'

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`

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
    if (!this.state.quote) {
      return <div>Loading Quotes ...</div>
    }
    return (
      <div className="App" id="quote-box">
        <Quote {...this.state} />
        <Buttons>
          <SocialMediaButtons {...this.state} />
          <button id="new-quote" onClick={this.displayQuote}>
            New Quote
          </button>
        </Buttons>
      </div>
    )
  }
}

export default App
