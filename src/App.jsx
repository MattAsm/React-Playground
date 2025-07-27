import { useState } from 'react'
import './App.css'
import './components/timer.css';

import ToggleTome from './TestComponents/ToggleTome.jsx';
import RateDungeon from './TestComponents/DungeonRate.jsx'
import HydraTimer from './TestComponents/Hydra.jsx'

function App() {

  return (
    <>
    <HydraTimer />
    <ToggleTome />
    <RateDungeon />
    </>
  )
}

export default App