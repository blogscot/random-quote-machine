import React from 'react'
import { string } from 'prop-types'

const Quote = ({ author, quote }) => {
  return (
    <>
      <div id="text">
        <span className="quote-mark">"</span>
        {quote}
        <span className="quote-mark">"</span>
      </div>
      <div id="author">{author}</div>
    </>
  )
}

Quote.propTypes = {
  author: string.isRequired,
  quote: string.isRequired,
}

export default Quote
