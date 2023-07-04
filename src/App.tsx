import { useState, FormEvent } from 'react';
import logoImg from './assets/logo.png';

import './App.css';

interface InfoResultProps{
  title: string,
  ethanol: string | number,
  gasoline: string | number,
}

function App() {
  const [ethanolInput, setEthanolInput] = useState(0);
  const [gasolineInput, setGasolineInput] = useState(0);
  const [infoResult, setInfoResult] = useState<InfoResultProps>();

  // Função javascript puro que formata o valor da moeda.
  function formatCurrency(value: Number){
    let formattedValue = value.toLocaleString("pt-br",
    {
      style: 'currency',
      currency: 'BRL'
    });
    return formattedValue;
  }


  function handleCalculate(event: FormEvent){
    event.preventDefault();

    let calculation = (ethanolInput / gasolineInput);
    if(calculation <= 0.7){
      setInfoResult({
        title: "It pays to use Ethanol",
        ethanol: formatCurrency(ethanolInput),
        gasoline: formatCurrency(gasolineInput),
      });
    }else{
      setInfoResult({
        title: "It pays to use Gasoline",
        ethanol: formatCurrency(ethanolInput),
        gasoline: formatCurrency(gasolineInput),
      });
    }

  }

  return (
    <>
      <main className='container'>
        <img 
          className='logo' 
          src={logoImg} 
          alt="Gasoline or ethanol calculator logo" 
        />
        <h1 className='title' >What's the best option?</h1>

        <form className='form' onSubmit={handleCalculate}>
          <label>Ethanol (Price per liter)</label>
          <input 
            className='input'
            type="number" 
            placeholder='0.00'
            min={1}
            step={0.01}
            required
            value={ethanolInput}
            onChange={(e) => setEthanolInput(Number(e.target.value))}
          />
          <label>Gasoline (Price per liter)</label>
          <input 
            className='input'
            type="number" 
            placeholder='0.00'
            min={1}
            step={0.01}
            required
            value={gasolineInput}
            onChange={(e) => setGasolineInput(Number(e.target.value))}
          />

          <input className='button' type="submit" value="Calculate" />
        </form>

        {infoResult && Object.keys(infoResult).length > 0 && (
          <section className='result'>
            <h2 className='result-title'>{infoResult.title}</h2>
            <span>Ethanol {infoResult.ethanol}</span>
            <span>Gasoline {infoResult.gasoline}</span>
        </section>
        )}

      </main>
    </>
  )
}

export default App
