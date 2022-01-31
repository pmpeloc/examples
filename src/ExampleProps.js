import React from 'react';

const ExampleProps = ({ title, text }) => {
  console.log(title);
  return (
    <>
      <h1>Hola {title}</h1>
      <p>{text}</p>
    </>
  );
};

export default ExampleProps;
