import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import testImage from '../../resources/images/testImage.jpg'

const Card = props => {
  return (
    <div className='card'>
      <div className='image flex_middle'>
        <img src={testImage} alt='Test' />
      </div>
      <div className='flex_between'>
        <div className='subreddit-name'>r/ProgrammerHumor</div>
        <div className='author'>{moment.unix(1645970526).fromNow()}</div>
      </div>
      <div className='caption flex_middle cursor-pointer'>
        <a
          href={
            "https://reddit.com/r/ProgrammerHumor/comments/t2oumw/netflix_clone_here_i_come/"
          }
          target='_blank'
          rel='noreferrer nofollow'
        >
          This is a funny post my god 
        </a>
      </div>
    </div>
  );
}

Card.propTypes = {}

export default Card