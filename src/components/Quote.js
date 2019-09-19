import React from 'react'

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

export default Quote
