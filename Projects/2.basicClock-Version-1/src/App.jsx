import { useState } from 'react'
import ColockHeading from './component/colockHeading'
import ClockSlogan from './component/clockSlogan'
import CurrentTime from './component/CurrentTime'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


function App() {


  return (
    <>
    <center>
      <ColockHeading></ColockHeading>
      <ClockSlogan></ClockSlogan>
      <CurrentTime></CurrentTime>
    </center>
      
    </>
  )
}

export default App
