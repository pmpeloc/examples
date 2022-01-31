import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ExampleProps from './ExampleProps';
import WrapperTest from './Wrapper';
import ChildrenTest from './Children';
import ExampleUseState from './ExampleUseState';
import ExampleUseEffect from './ExampleUseEffect';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ExampleProps title={'Noticias'} text={'Saludo'} />
    {/* <WrapperTest color='blue'> */}
    <WrapperTest color='yellow'>
      <ChildrenTest />
    </WrapperTest>
    <ExampleUseState />
    <ExampleUseEffect />
  </React.StrictMode>,
  document.getElementById('root')
);
