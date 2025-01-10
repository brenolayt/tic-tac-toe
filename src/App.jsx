import './App.css'
import { useState } from 'react';
import Game from './components/Game';
import Menu from './components/menu';
import GameOver from './components/gameOver';

function App() {

  return (
    <main className="h-screen w-full bg-slate-900 grid place-items-center">
      <Game/>
    </main>
  );
}

export default App
