import { useState } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";

// https://react-bootstrap.github.io/components/buttons/
function ToggleAgeButtons() {
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { age: 'Under 18', value: '1' },
    { age: '18 - 24', value: '2' },
    { age: '25 - 34', value: '3' },
    { age: '35 - 44', value: '4' },
    { age: '45 - 54', value: '5' },
    { age: '55 - 64', value: '6' },
    { age: '65+', value: '7' }
  ];

  return (
    <ButtonGroup toggle>
      {radios.map((radio, idx) => (
        <ToggleButton
          key={idx}
          type='radio'
          variant='secondary'
          name='radio'
          value={radio.value}
          checked={radioValue === radio.value}
          onChange={(e) => setRadioValue(e.currentTarget.value)}
        >
          {radio.age}
        </ToggleButton>
      ))}
    </ButtonGroup>
  )
}

export default ToggleAgeButtons;
