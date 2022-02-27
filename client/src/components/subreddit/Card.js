import React from 'react'
import moment from 'moment'

const Card = ({ element }) => {
  return (
    <div className='card'>
      <div className='image flex_middle'>
        {element.type === "photo" && <img src={element.url} alt='Test' />}
        {element.type === "video" && 
            <video controls autoplay>
                <source src={element.url} />
            </video>
        }
      </div>
      <div className='flex_between'>
        <div className='subreddit-name'>r/{element.post}</div>
        <div className='author'>{moment.unix(element.time).fromNow()}</div>
      </div>
      <div className='caption flex_middle cursor-pointer'>
        <a
          href={`https://reddit.com${element.link}`}
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