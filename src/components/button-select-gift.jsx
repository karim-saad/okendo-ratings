import React from 'react';
import ButtonOn from './button-on';
import ButtonOff from './button-off';

function ButtonSelectGift() {
  const [selected, setSelected] = React.useState();
  const gifts = ['Personal Use', 'Gift'];

  return (
    <div className='Bought-for-container'>
      {gifts.map((gift, id) => (
        id === selected ? <ButtonOn name={gift} onClick={() => setSelected(id)} key={id} /> :
          <ButtonOff name={gift} onClick={() => setSelected(id)} key={id} />
      ))}
    </div>
  )
}

export default ButtonSelectGift;