import React from 'react';

function ButtonOn(props) {
  return (
    <div className='Button-on' onClick={props.onClick}>
      <p className='Button-text' style={{ color: '#ffffff' }}>
        {props.name}
      </p>
    </div>
  )
}

export default ButtonOn;