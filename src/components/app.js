import React from 'react'
import { render } from 'react-dom'

import Footer from './footer';
import Header from '../containers/container-header'
import Section from '../containers/container-section'
import SimpleMap from './map'




const App = () => (
  <div>
  <Header/>
  <Section/>

  <SimpleMap/>
  <Footer/>

  </div>
);
export default App
