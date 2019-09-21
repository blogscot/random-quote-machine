import React from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

const Text = styled.div`
  text-align: center;
  font-family: 'Raleway', sans-serif;
  font-size: 24px;
  min-width: 300px;
`
const QuoteMark = styled.span`
  font-style: italic;
  font-weight: bolder;
  font-family: sans-serif;
`
const Author = styled.div`
  align-self: flex-end;
  font-size: 18px;
  font-style: italic;
  font-weight: bold;
  margin: 1.8rem 0 1.7rem;
`

const Quote = ({ author, quote }) => {
  return (
    <>
      <Text id="text">
        <QuoteMark>"</QuoteMark>
        {quote}
        <QuoteMark>"</QuoteMark>
      </Text>
      <Author id="author">{author}</Author>
    </>
  )
}

Quote.propTypes = {
  author: string.isRequired,
  quote: string.isRequired,
}

export default Quote
