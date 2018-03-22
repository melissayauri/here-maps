import React from 'react'
import { render } from 'react-dom'
import Header from './Header';

import Section from '../containers/container-section';
import Footer from './footer';

const Imagen = [{name:'logito', url:'brand.png'}];

const App = () => (
  <div>
  <Header/>
  <Section/>
  <Footer/>
  </div>
);
export default App
