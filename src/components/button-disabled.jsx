import React from 'react';

function ButtonDisabled(props) {
  return (
    <div className='Button-disabled' onClick={props.onClick}>
      <p className='Button-disabled-text'>
        {props.name}
      </p>
    </div>
  )
}

export default ButtonDisabled;