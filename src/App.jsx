import './App.css'
import { useState } from 'react';
import Game from './components/Game';
import Menu from './components/menu';

function App() {
  const [showGame, setGame] = useState(false);

  return (
    <main className="h-screen w-full bg-slate-900 grid place-items-center">
      {!showGame && <Menu onC={() => setGame(!showGame)}/>}
      {showGame && <Game/>}
    </main>
  );
}

export default App
