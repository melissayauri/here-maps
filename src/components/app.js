import React from 'react'
import { render } from 'react-dom'
import Header from '../containers/container-header'
import Section from '../containers/container-section'
import SimpleMap from './map'



const App = () => (
  <div>
  <Header/>
  <Section/>
  <SimpleMap/>
  </div>
);
export default App
