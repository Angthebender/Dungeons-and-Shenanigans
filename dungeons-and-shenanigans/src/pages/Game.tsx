import React, {  useState } from 'react';
import SettingsModal from '../components/SettingsModal.tsx';
import PhaserMap from '../components/PhaserMap';

type Props = {
  onBack: () => void;
};

export default function Game({ onBack }: Props) {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [diceResult, setDiceResult] = useState<number | null>(null);
  const [selectedDice, setSelectedDice] = useState('D20');
  const [messages, setMessages] = useState<{ text: string; sender: 'player' | 'ai' }[]>([]);
  const [input, setInput] = useState('');
  

  const rollDice = () => {
    const diceMap: Record<string, number> = {
      D4: 4,
      D6: 6,
      D8: 8,
      D10: 10,
      D12: 12,
      D20: 20,
    };
  
    const max = diceMap[selectedDice];
    const result = Math.floor(Math.random() * max) + 1;
    setDiceResult(result);
  };
  

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'player' }]);
      setInput('');
      setTimeout(() => {
        setMessages((prev) => [...prev, { text: 'The AI responds mysteriously...', sender: 'ai' }]);
      }, 1000);
    }
  };

  return (
    <div className="parchment-bg flex flex-col items-center p-4">
      <div className="w-full max-w-4xl flex flex-row gap-4">
        <div className="flex-1">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-4xl font-bold" style={{ fontFamily: 'Cinzel Decorative' }}>
              Goblin Cave
            </h2>
            <button onClick={() => setSettingsOpen(true)} className="wooden-button text-lg">
              Settings
            </button>
          </div>

          <div className="narrative-box mb-4">
            <p>The goblin hideout lies ahead. What will you do?</p>
          </div>

          <div className="cloud-interface mb-4">
            <div className="map-placeholder">Tile-Based Map Placeholder</div>
            <PhaserMap />
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">Chat with the AI Grandmaster</h3>
            <div className="chat-box">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`p-2 mb-2 rounded-lg ${
                    msg.sender === 'player' ? 'bg-yellow-100 text-right' : 'bg-gray-100'
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="flex gap-2 mt-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Speak to the AI Grandmaster..."
                className="fantasy-input flex-1"
              />
              <button onClick={handleSend} className="wooden-button">
                Send
              </button>
            </div>
          </div>
        </div>

        {/* Dice Roller */}
        <div className="w-1/4">
            <div className="dice-area">
                <h3 className="text-lg font-bold mb-2">Roll the Dice</h3>

                <select
                value={selectedDice}
                onChange={(e) => setSelectedDice(e.target.value)}
                className="fantasy-select w-full mb-4"
                >
                {['D4', 'D6', 'D8', 'D10', 'D12', 'D20'].map((dice) => (
                    <option key={dice}>{dice}</option>
                ))}
                </select>

                <button onClick={rollDice} className="wooden-button w-full">
                Roll
                </button>

                {diceResult !== null && (
                <p className="mt-4 text-center text-2xl font-bold">🎲 Result: {diceResult}</p>
                )}
            </div>
        </div>

      </div>
      
      {/* Settings modal */}
      {settingsOpen && (
        <SettingsModal
        onClose={() => setSettingsOpen(false)}
        onSaveAndLeave={onBack}
      />
      )}
    </div>
  );
}
