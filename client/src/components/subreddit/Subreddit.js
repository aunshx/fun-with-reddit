import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'

const Subreddit = ({ images }) => {
  return (
    <div className='subreddit flex_column'>
        {images.length > 0 && (
            images.map((element, index) => (
                <div key={index}>
                    <Card element={element} count={index} />
                </div>
            ))
        )}
    </div>
  );
};

Subreddit.propTypes = {}

export default Subreddit