import './App.css';
import React, { useState, useEffect } from 'react';
import { pairs } from './Output';

function App() {
  const [selectedActor, setSelectedActor] = useState('Adam')
  const [message, setMessage] = useState('');
  const actors = ["Adam", "Ania", "Kuba", "Weronika", "Paweł", "Agata"];

  return (
    <div className="App">
      <header className="App-header">
        <label htmlFor="imiona">Podaj twoje imię a ujawnię ci komu prezent masz kupić</label>
        <select style={{ fontWeight: 500, width: '150px', height: '50px', backgroundColor: '#282c34', margin: '10px', color: 'white'}} onChange={(e) => {
          setSelectedActor(e.target.value)
        }} name="imiona" id="imiona">
          {actors.map((actor) => <option key={actor} value={actor}>{actor}</option>)}
        </select>
        <button style={{ width: '150px', height: '50px', margin: '10px' }} onClick={() => setMessage(pairs.find(val => val.from === selectedActor).to)}>Ok</button>
        {message && (
          <>
            <h4>Kupujesz prezent dla: {message}</h4>
            <p style={{ fontSize: '12px'}}>Zasady: kazdy kupuje prezent dla jednej wylosowanej przez system osobie. Prezent najlepiej do 100zl. W excelu załączonym do maila wpiszcie co chcielibyście dostać jako pomoc dla waszego sekretnego prezentodawcy.</p>
          </>
        )}
      </header>

      <div class="snowflakes" aria-hidden="true">
        <div class="snowflake">
          <div class="inner">❅</div>
        </div>
        <div class="snowflake">
          <div class="inner">❅</div>
        </div>
        <div class="snowflake">
          <div class="inner">❅</div>
        </div>
        <div class="snowflake">
          <div class="inner">❅</div>
        </div>
        <div class="snowflake">
          <div class="inner">❅</div>
        </div>
        <div class="snowflake">
          <div class="inner">❅</div>
        </div>
        <div class="snowflake">
          <div class="inner">❅</div>
        </div>
        <div class="snowflake">
          <div class="inner">❅</div>
        </div>
        <div class="snowflake">
          <div class="inner">❅</div>
        </div>
        <div class="snowflake">
          <div class="inner">❅</div>
        </div>
        <div class="snowflake">
          <div class="inner">❅</div>
        </div>
        <div class="snowflake">
          <div class="inner">❅</div>
        </div>
      </div>
    </div>
  );
}

export default App;
