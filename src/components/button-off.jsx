import React from 'react';

function ButtonOff(props) {
  return (
    <div className='Button-off' onClick={props.onClick}>
      <p className='Button-text'>
        {props.name}
      </p>
    </div>
  )
}

export default ButtonOff;