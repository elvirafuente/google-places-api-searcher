import React, { useState } from 'react';
import './App.css';
import ResultList from './components/ResultList'
const KEY = process.env.REACT_APP_KEY;
// const KEY = 'AIzaSyCc0l_s236CmzDdlKRoScuxwchEs0yiRGU'

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleValue = event =>{
    const { value } = event.target
    setInputValue(value)
  }
  const convertToValidQueryParameter = () => {
    const newInputValue = inputValue.replace(/ /g, '+');
    return newInputValue
  }

  const handleClick = () =>{
      const newInputValue = convertToValidQueryParameter();

      const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${newInputValue}&fields=name,photo&key=${KEY}`;
      fetch(url, {
        mode: 'cors',
        headers:{
          'Access-Control-Allow-Origin':'*'
        },
      })
      .then(response => response.json())
      .then(data => console.log(data))
  }
  return (
    <div className="App">
      <header className="App-header">
        <label htmlFor="search">
          ¿Estás en Google Place? introduce el nombre de tu negocio
          <input type="text" name="search" id="search" value={inputValue} onChange={handleValue}/>
        </label>
        <button type="button" onClick={handleClick}>Buscar</button>
      </header>
      <main>
        <ResultList />
      </main>
    </div>
  );
}

export default App;
