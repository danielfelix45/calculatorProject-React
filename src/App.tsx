import { useState } from 'react'
import logoImg from './assets/logo.png'

import './App.css'

function App() {

  return (
    <>
      <main className='container'>
        <img 
          className='logo' 
          src={logoImg} 
          alt="Gasoline or ethanol calculator logo" 
        />
        <h1 className='title' >What's the best option?</h1>

        <form className='form'>
          <label>Ethanol(price per liter)</label>
          <input 
            className='input'
            type="number" 
            placeholder='4.90'
            min={1}
            step={0.01}
            required
          />
          <label>Gasoline(price per liter)</label>
          <input 
            className='input'
            type="number" 
            placeholder='4.90'
            min={1}
            step={0.01}
            required
          />

          <input className='button' type="sbmit" value="Calculate" />
        </form>

      </main>
    </>
  )
}

export default App
