import React from 'react';
import { render } from 'react-dom';
import './styles.css';

const Greeting = () => {
  return <h1>Hello From React!</h1>;
};

render(<Greeting />, document.getElementById('root'));
