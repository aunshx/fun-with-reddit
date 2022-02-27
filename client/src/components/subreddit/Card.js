import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import testImage from '../../resources/images/testImage.jpg'

const Card = ({ element }) => {
  return (
    <div className='card'>
      <div className='image flex_middle'>
        <img src={element.url} alt='Test' />
      </div>
      <div className='flex_between'>
        <div className='subreddit-name'>r/{element.post}</div>
        <div className='author'>{moment.unix(element.time).fromNow()}</div>
      </div>
      <div className='caption flex_middle cursor-pointer'>
        <a
          href={
            `https://reddit.com${element.link}`
          }
          target='_blank'
          rel='noreferrer nofollow'
        >
          {element.title}
        </a>
      </div>
    </div>
  );
}

Card.propTypes = {}

export default Card