import React from 'react';
import ButtonOn from './button-on';
import ButtonOff from './button-off';

function ButtonSelectAge() {
  const [selected, setSelected] = React.useState();
  const ages = ['Under 18', '18 - 24', '25 - 34', '35 - 44', '45 - 54', '55 - 64', '65+'];

  const isSelected = (id) => {
    return id === selected ? true : false
  }

  return (
    <div className='Age-range-container'>
      {ages.map((age, id) => (
        isSelected(id) ? <ButtonOn name={age} onClick={() => setSelected(id)} key={id} /> :
          <ButtonOff name={age} onClick={() => setSelected(id)} key={id} />
      ))}
    </div>
  )
}

export default ButtonSelectAge;