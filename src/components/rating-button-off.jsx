import React from 'react';

function RatingButtonOff(props) {
  return (
    <div className='Rating-button-off' onClick={props.onClick}>
      <p className='Rating-button-off-text'>{props.number}</p>
    </div>
  )
}

export default RatingButtonOff;