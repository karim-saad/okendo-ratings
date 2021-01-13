import React from 'react';

function RatingButtonOn(props) {
  return (
    <div className='Rating-button-on' onClick={props.onClick}>
      <p className='Rating-button-on-text'>{props.number}</p>
    </div>
  )
}

export default RatingButtonOn;