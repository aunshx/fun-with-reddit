import React from 'react'
import PropTypes from 'prop-types'

const Spinner = props => {
  return (
    <div className='flex_middle'>
      <div class='lds-roller'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

Spinner.propTypes = {}

export default Spinner