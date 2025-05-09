import React, { useState } from 'react';
import Home from './pages/Home';
import CharacterCreation from './pages/CharacterCreation'
import Game from './pages/Game';
import ContinueGame from './pages/ContinueGame';



function App() {
  const [screen, setScreen] = useState('home');

  const handleStart = () => setScreen('character');
  const handleContinue = () => setScreen('continue');

  return (
    <div>
      {screen === 'home' && <Home onStart={handleStart} onContinue={handleContinue} />}
      {screen === 'character' && (<CharacterCreation onStartGame={() => setScreen('game')} onBack={() => setScreen('home')} />)}
      {screen === 'game' && <Game onBack={() => setScreen('home')} />}
      {screen === 'continue' && <ContinueGame onSelect={() => setScreen('game')} onBack={() => setScreen('home')} />}
    </div>
  );
}

export default App;
