import React from 'react';
import ButtonOn from './button-on';
import ButtonOff from './button-off';
import ButtonDisabled from './button-disabled.jsx';

function ButtonSelectStandouts() {
  const [selected, setSelected] = React.useState([]);
  const standouts = ['Accurate Timekeeping', 'High Quality', 'Durable', 'Elegant', 'Good Weight', 'Versatile', 'Looks Expensive', 'Attracts Compliments', 'Unique', 'Great Gift', 'Great Value'];

  React.useEffect(() => {
    console.log(selected);
  });

  const isSelected = (id) => {
    return selected.find(s => s === id) !== undefined;
  }

  const isDisabled = (id) => {
    return selected.length > 4 && !isSelected(id);
  }

  const handleClick = (id) => {
    if (isSelected(id)) {
      const index = selected.indexOf(id);
      if (index > -1) {
        setSelected(selected.filter((_, i) => i !== index));
      }
    } else if (!isSelected(id) && !isDisabled(id)) {
      setSelected([...selected, id]);
    }
  }

  return (
    <div className='Product-standout-container'>
      {standouts.map((standout, id) => (
        isDisabled(id) ? <ButtonDisabled name={standout} onClick={() => handleClick(id)} key={id} /> :
          isSelected(id) ? <ButtonOn name={standout} onClick={() => handleClick(id)} key={id} /> :
            <ButtonOff name={standout} onClick={() => handleClick(id)} key={id} />
      ))}
    </div>
  );
}

export default ButtonSelectStandouts;