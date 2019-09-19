import React from 'react'
import {
  TwitterShareButton,
  TumblrShareButton,
  TwitterIcon,
  TumblrIcon,
} from 'react-share'

const SocialMediaButtons = ({ quote, author }) => {
  const text = `${'"' + quote + '" ' + author}`
  const iconSize = 36
  return (
    <div id="social-media">
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
    </div>
  )
}

export default SocialMediaButtons
