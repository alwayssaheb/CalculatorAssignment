import React from 'react';

const Hamburger = ({ toggleHistory }) => {
  return (
    <button className="hamburger" onClick={toggleHistory}>☰</button>
  );
};

export default Hamburger;
