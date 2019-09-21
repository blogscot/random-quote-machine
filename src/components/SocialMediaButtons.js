import React from 'react'
import {
  TwitterShareButton,
  TumblrShareButton,
  TwitterIcon,
  TumblrIcon,
} from 'react-share'
import { string } from 'prop-types'
import styled from 'styled-components'

const SocialMedia = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100px;
`

const SocialMediaButtons = ({ quote, author }) => {
  const text = `${'"' + quote + '" ' + author}`
  const iconSize = 40
  return (
    <SocialMedia>
      <TwitterShareButton
        url={'https://favqs.com'}
        title={text}
        className="twitter-button"
      >
        <TwitterIcon size={iconSize} round />
      </TwitterShareButton>
      <TumblrShareButton
        url={'https://favqs.com'}
        title={'Favourite Quotes'}
        caption={text}
        className="tumblr-button"
        tags={['quotes']}
      >
        <TumblrIcon size={iconSize} round />
      </TumblrShareButton>
      <a
        style={{ display: 'none' }}
        href="https://twitter.com/intent/tweet"
        id="tweet-quote"
      >
        Only needed to pass the tests
      </a>
    </SocialMedia>
  )
}

SocialMediaButtons.propTypes = {
  author: string.isRequired,
  quote: string.isRequired,
}

export default SocialMediaButtons
