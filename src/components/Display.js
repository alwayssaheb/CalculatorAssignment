import React from 'react';

const Display = ({ input }) => {
  return (
    <div className="display">
      <input type="text" value={input} readOnly />
    </div>
  );
};

export default Display;
