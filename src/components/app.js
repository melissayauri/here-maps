import React from 'react'
import { render } from 'react-dom'
import Header from '../containers/container-header'
import Section from '../containers/container-section'
import MyMap from './map'



const App = () => (
  <div>
  <Header/>
  <Section/>
  <MyMap/>
  </div>
);
export default App
