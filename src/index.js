import React from 'react';
import { render } from 'react-dom'
import Header from './components/Header'

const Page = () => (
  <div>
  <Header/>
    <p>
      Funciona
    </p>
  </div>
);

render(
  <Page />,
  document.getElementById('root')
);
