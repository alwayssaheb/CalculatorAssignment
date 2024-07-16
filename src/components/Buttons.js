import React from 'react';
import Button from './Button';

const Buttons = ({ handleButtonClick }) => {
  const buttonValues = [
    ['C', 'CE', '←', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=']
  ];

  return (
    <div className="buttons">
      {buttonValues.flat().map((val) => (
        <Button key={val} value={val} onClick={handleButtonClick} />
      ))}
    </div>
  );
};

export default Buttons;
