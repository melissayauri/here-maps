import React from 'react';
import { render } from 'react-dom'
import Header from './components/Header'
import Mapita from './components/map'

const Page = () => (
  <div>

  <Header/>
    <p>
      Funciona

    </p>
    <Mapita/>
  </div>

);

render(
  <Page />,
  document.getElementById('root')
);
