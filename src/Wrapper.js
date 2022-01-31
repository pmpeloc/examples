import React from 'react';

const WrapperTest = ({ children, color = 'red' }) => {
  console.log(color);
  return (
    <div style={{ backgroundColor: color, padding: '2rem' }}>{children}</div>
  );
};

export default WrapperTest;
