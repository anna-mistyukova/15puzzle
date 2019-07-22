import React from 'react'
import Gameboard from './components/Gameboard/gameContainer'
import './App.css'

function App () {
  return (
    <div className='App'>
      <header className='App-header'>
       Пятнашки
      </header>
      <Gameboard />
    </div>
  )
}

export default App
