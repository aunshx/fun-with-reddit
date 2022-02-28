import React from 'react'
import moment from 'moment'

const Card = ({ element }) => {
  return (
    <div className='card'>
      {element.type !== "discussion" && (
        <div className='image flex_middle'>
          {element.type === "photo" && <img src={element.url} alt='Test' />}
          {element.type === "video" && (
            <video controls autoplay='autoplay' muted>
              <source src={element.url} type='video/mp4' />
              <source src={element.url} type='video/ogg' />
              <source src={element.url} type='video/webm' />
              Browser does not support the video format.
            </video>
          )}
        </div>
      )}
      <div className='flex_between'>
        <div className='flex_middle'>
          <div className='subreddit-name'>r/{element.post}</div>
          <div className="type">
              {element.type === 'video' && ( <div className='video' >VID</div> )}
              {element.type === 'photo' && ( <div className='photo' >PIC</div> )}
              {element.type === 'discussion' && ( <div className='discussion' >DISC</div> )}
          </div>
        </div>
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