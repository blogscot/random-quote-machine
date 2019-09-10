import React from 'react'
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
  displayQuote() {
    const { author, body: quote } = this.quotes[this.index]
    this.setState({
      author,
      quote,
    })

    this.index = this.index + 1
    if (this.index >= this.quotes.length) {
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
    })
    data = await data.json()
    this.quotes = data.quotes
  }
  render() {
    return (
      <div className="App">
        <div id="quote">
          <span className="quote-mark">"</span>
          {this.state.quote}
          <span className="quote-mark">"</span>
        </div>
        <div id="author">{this.state.author}</div>
        <button onClick={this.displayQuote}>Get Quote</button>
      </div>
    )
  }
}

// var data = {
//   page: 1,
//   last_page: false,
//   quotes: [
//     {
//       id: 19135,
//       dialogue: false,
//       private: false,
//       tags: ['faith'],
//       url:
//         'https://favqs.com/quotes/oliver-wendell-holmes/19135-if-i-were-dyi-',
//       favorites_count: 0,
//       upvotes_count: 1,
//       downvotes_count: 0,
//       author: 'Oliver Wendell Holmes',
//       author_permalink: 'oliver-wendell-holmes',
//       body:
//         'If I were dying my last words would be: Have faith and pursue the unknown end.',
//     },
//     {
//       id: 11987,
//       dialogue: false,
//       private: false,
//       tags: ['fear', 'courage'],
//       url: 'https://favqs.com/quotes/plutarch/11987-courage-consi-',
//       favorites_count: 0,
//       upvotes_count: 1,
//       downvotes_count: 0,
//       author: 'Plutarch',
//       author_permalink: 'plutarch',
//       body:
//         'Courage consists not in hazarding without fear but being resolutely minded in a just cause.',
//     },
//     {
//       id: 58835,
//       dialogue: false,
//       private: false,
//       tags: ['truth'],
//       url: 'https://favqs.com/quotes/francis-bacon/58835-what-is-truth-',
//       favorites_count: 0,
//       upvotes_count: 1,
//       downvotes_count: 0,
//       author: 'Francis Bacon',
//       author_permalink: 'francis-bacon',
//       body:
//         'What is truth? said jesting Pilate and would not stay for an answer.',
//     },
//     {
//       id: 59323,
//       dialogue: false,
//       private: false,
//       tags: ['war'],
//       url: 'https://favqs.com/quotes/george-orwell/59323-oceania-was-a-',
//       favorites_count: 0,
//       upvotes_count: 1,
//       downvotes_count: 0,
//       author: 'George Orwell',
//       author_permalink: 'george-orwell',
//       body:
//         'Oceania was at war with Eurasia therefore Oceania had always been at war with Eurasia.',
//     },
//     {
//       id: 61862,
//       dialogue: false,
//       source: 'The Way.  2010 Movie.  19m25s.',
//       context:
//         'In response to Tom, who said he was walking the Camino de Santiago for his deceased son.',
//       private: false,
//       tags: ['the-way-movie'],
//       url: 'https://favqs.com/quotes/captain-henri/61862-you-walk-the--',
//       favorites_count: 2,
//       upvotes_count: 0,
//       downvotes_count: 0,
//       author: 'Captain Henri',
//       author_permalink: 'captain-henri',
//       body: 'You walk the way for yourself, only for yourself.',
//     },
//     {
//       id: 275,
//       dialogue: false,
//       private: false,
//       tags: ['physicist', 'knowledge', 'imagination'],
//       url: 'https://favqs.com/quotes/albert-einstein/275-when-i-examine--',
//       favorites_count: 2,
//       upvotes_count: 1,
//       downvotes_count: 0,
//       author: 'Albert Einstein',
//       author_permalink: 'albert-einstein',
//       body:
//         'When I examine myself and my methods of thought I come to the conclusion that the gift of fantasy has meant more to me than my talent for absorbing positive knowledge.',
//     },
//     {
//       id: 33671,
//       dialogue: false,
//       private: false,
//       tags: ['humor'],
//       url: 'https://favqs.com/quotes/ambrose-bierce/33671-wit-the-salt--',
//       favorites_count: 0,
//       upvotes_count: 1,
//       downvotes_count: 0,
//       author: 'Ambrose Bierce',
//       author_permalink: 'ambrose-bierce',
//       body:
//         'Wit - the salt with which the American humorist spoils his intellectual cookery by leaving it out.',
//     },
//     {
//       id: 23509,
//       dialogue: false,
//       private: false,
//       tags: ['freedom'],
//       url: 'https://favqs.com/quotes/friedrich-nietzsche/23509-nothing-has-b-',
//       favorites_count: 0,
//       upvotes_count: 1,
//       downvotes_count: 0,
//       author: 'Friedrich Nietzsche',
//       author_permalink: 'friedrich-nietzsche',
//       body:
//         'Nothing has been purchased more dearly than the little bit of reason and sense of freedom which now constitutes our pride.',
//     },
//     {
//       id: 18861,
//       dialogue: false,
//       private: false,
//       tags: ['men', 'faith'],
//       url: 'https://favqs.com/quotes/benjamin-franklin/18861-in-the-affair-',
//       favorites_count: 0,
//       upvotes_count: 1,
//       downvotes_count: 0,
//       author: 'Benjamin Franklin',
//       author_permalink: 'benjamin-franklin',
//       body:
//         'In the affairs of this world, men are saved not by faith, but by the want of it.',
//     },
//     {
//       id: 580,
//       dialogue: false,
//       source: 'Bones, Season 9, Episode 12.  TV.',
//       private: false,
//       tags: ['tv', 'witty', 'bones'],
//       url: 'https://favqs.com/quotes/temperance-brennan/580-it-s-an-amazing-',
//       favorites_count: 1,
//       upvotes_count: 0,
//       downvotes_count: 0,
//       author: 'Temperance Brennan',
//       author_permalink: 'temperance-brennan',
//       body:
//         "It's an amazing achievement until you consider that it doesn't actually achieve anything.",
//     },
//     {
//       id: 61048,
//       dialogue: false,
//       private: false,
//       tags: ['work'],
//       url: 'https://favqs.com/quotes/will-rogers/61048-liberty-doesn-',
//       favorites_count: 1,
//       upvotes_count: 1,
//       downvotes_count: 0,
//       author: 'Will Rogers',
//       author_permalink: 'will-rogers',
//       body: "Liberty doesn't work as well in practice as it does in speeches.",
//     },
//     {
//       id: 25800,
//       dialogue: false,
//       private: false,
//       tags: ['imagination', 'future'],
//       url: 'https://favqs.com/quotes/mason-cooley/25800-taste-refers--',
//       favorites_count: 0,
//       upvotes_count: 1,
//       downvotes_count: 0,
//       author: 'Mason Cooley',
//       author_permalink: 'mason-cooley',
//       body: 'Taste refers to the past, imagination to the future.',
//     },
//     {
//       id: 27273,
//       dialogue: false,
//       private: false,
//       tags: ['good'],
//       url: 'https://favqs.com/quotes/richard-whately/27273-a-man-is-call-',
//       favorites_count: 0,
//       upvotes_count: 1,
//       downvotes_count: 0,
//       author: 'Richard Whately',
//       author_permalink: 'richard-whately',
//       body:
//         "A man is called selfish not for pursuing his own good, but for neglecting his neighbor's.",
//     },
//     {
//       id: 61059,
//       dialogue: false,
//       private: false,
//       tags: ['work'],
//       url: 'https://favqs.com/quotes/aldous-huxley/61059-people-intoxi-',
//       favorites_count: 1,
//       upvotes_count: 1,
//       downvotes_count: 0,
//       author: 'Aldous Huxley',
//       author_permalink: 'aldous-huxley',
//       body:
//         "People intoxicate themselves with work so they won't see how they really are.",
//     },
//     {
//       id: 24276,
//       dialogue: false,
//       private: false,
//       tags: ['friendship'],
//       url:
//         'https://favqs.com/quotes/lucius-annaeus-seneca/24276-one-of-the-mo-',
//       favorites_count: 0,
//       upvotes_count: 1,
//       downvotes_count: 0,
//       author: 'Lucius Annaeus Seneca',
//       author_permalink: 'lucius-annaeus-seneca',
//       body:
//         'One of the most beautiful qualities of true friendship is to understand and to be understood.',
//     },
//     {
//       id: 45776,
//       dialogue: false,
//       private: false,
//       tags: ['peace'],
//       url: 'https://favqs.com/quotes/albert-einstein/45776-peace-cannot--',
//       favorites_count: 0,
//       upvotes_count: 1,
//       downvotes_count: 0,
//       author: 'Albert Einstein',
//       author_permalink: 'albert-einstein',
//       body:
//         'Peace cannot be kept by force it can only be achieved by understanding.',
//     },
//     {
//       id: 57478,
//       dialogue: false,
//       private: false,
//       tags: ['time'],
//       url: 'https://favqs.com/quotes/franz-kafka/57478-i-do-not-read-',
//       favorites_count: 0,
//       upvotes_count: 1,
//       downvotes_count: 0,
//       author: 'Franz Kafka',
//       author_permalink: 'franz-kafka',
//       body:
//         'I do not read advertisements. I would spend all of my time wanting things.',
//     },
//     {
//       id: 46480,
//       dialogue: false,
//       private: false,
//       tags: ['pet'],
//       url: 'https://favqs.com/quotes/mason-cooley/46480-even-cats-gro-',
//       favorites_count: 1,
//       upvotes_count: 1,
//       downvotes_count: 0,
//       author: 'Mason Cooley',
//       author_permalink: 'mason-cooley',
//       body: 'Even cats grow lonely and anxious.',
//     },
//     {
//       id: 33720,
//       dialogue: false,
//       private: false,
//       tags: ['men', 'humor'],
//       url: 'https://favqs.com/quotes/h-l-mencken/33720-there-are-men-',
//       favorites_count: 0,
//       upvotes_count: 1,
//       downvotes_count: 0,
//       author: 'H. L. Mencken',
//       author_permalink: 'h-l-mencken',
//       body:
//         'There are men so philosophical that they can see humor in their own toothaches. But there has never lived a man so philosophical that he could see the toothache in his own humor.',
//     },
//     {
//       id: 44867,
//       dialogue: false,
//       private: false,
//       tags: ['nature'],
//       url:
//         'https://favqs.com/quotes/lucius-annaeus-seneca/44867-what-nature-r-',
//       favorites_count: 0,
//       upvotes_count: 1,
//       downvotes_count: 0,
//       author: 'Lucius Annaeus Seneca',
//       author_permalink: 'lucius-annaeus-seneca',
//       body:
//         'What nature requires is obtainable, and within easy reach. It is for the superfluous we sweat.',
//     },
//     {
//       id: 29972,
//       dialogue: false,
//       private: false,
//       tags: ['happiness'],
//       url: 'https://favqs.com/quotes/george-eliot/29972-a-woman-s-hea-',
//       favorites_count: 0,
//       upvotes_count: 1,
//       downvotes_count: 0,
//       author: 'George Eliot',
//       author_permalink: 'george-eliot',
//       body:
//         "A woman's heart must be of such a size and no larger, else it must be pressed small, like Chinese feet her happiness is to be made as cakes are, by a fixed recipe.",
//     },
//     {
//       id: 663,
//       dialogue: false,
//       private: false,
//       tags: [],
//       url: 'https://favqs.com/quotes/james-dean/663-dream-as-if-you-',
//       favorites_count: 1,
//       upvotes_count: 0,
//       downvotes_count: 0,
//       author: 'James Dean',
//       author_permalink: 'james-dean',
//       body: "Dream as if you'll live forever. Live as if you'll die today.",
//     },
//     {
//       id: 7836,
//       dialogue: false,
//       private: false,
//       tags: ['business'],
//       url: 'https://favqs.com/quotes/william-feather/7836-a-budget-tells-',
//       favorites_count: 0,
//       upvotes_count: 1,
//       downvotes_count: 0,
//       author: 'William Feather',
//       author_permalink: 'william-feather',
//       body:
//         "A budget tells us what we can't afford, but it doesn't keep us from buying it.",
//     },
//     {
//       id: 29152,
//       dialogue: false,
//       private: false,
//       tags: ['great'],
//       url: 'https://favqs.com/quotes/steve-jobs/29152-the-system-is-',
//       favorites_count: 0,
//       upvotes_count: 1,
//       downvotes_count: 0,
//       author: 'Steve Jobs',
//       author_permalink: 'steve-jobs',
//       body:
//         "The system is that there is no system. That doesn't mean we don't have process. Apple is a very disciplined company, and we have great processes. But that's not what it's about. Process makes you more efficient.",
//     },
//     {
//       id: 26851,
//       dialogue: false,
//       private: false,
//       tags: ['god'],
//       url: 'https://favqs.com/quotes/bertrand-russell/26851-i-like-mathem-',
//       favorites_count: 1,
//       upvotes_count: 1,
//       downvotes_count: 0,
//       author: 'Bertrand Russell',
//       author_permalink: 'bertrand-russell',
//       body:
//         "I like mathematics because it is not human and has nothing particular to do with this planet or with the whole accidental universe - because, like Spinoza's God, it won't love us in return.",
//     },
//   ],
// }

export default App
