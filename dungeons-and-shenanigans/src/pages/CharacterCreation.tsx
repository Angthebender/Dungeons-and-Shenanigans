import React, { useState } from 'react';
import CharacterPreview from '../components/CharacterPreview';



type Props = {
  onStartGame: () => void;
  onBack: () => void;
};

export default function CharacterCreation({ onStartGame, onBack }: Props) {
  const [character, setCharacter] = useState({
    name: '',
    class: 'Fighter',
    race: 'Human',
    trait: 'Brave'
  });

  const classes = [
    'Barbarian',
    'Bard',
    'Cleric',
    'Druid',
    'Fighter',
    'Monk',
    'Paladin',
    'Ranger',
    'Rogue',
    'Sorcerer',
    'Warlock',
    'Wizard'
  ];
  
  const races = [
    'Human',
    'Elf',
    'Dwarf',
    'Halfling',
    'Gnome',
    'Half-Orc',
    'Tiefling',
    'Dragonborn',
    'Aasimar',
    'Firbolg',
    'Genasi',
    'Goliath',
    'Tabaxi',
    'Triton',
    'Kenku',
    'Lizardfolk'
  ];
  const traitOptions = [
    'Brave',
    'Witty',
    'Mysterious',
    'Honest',
    'Deceitful',
    'Loyal',
    'Greedy',
    'Kind',
    'Cunning',
    'Stoic',
    'Reckless',
    'Curious'
  ];
  const [showPreview, setShowPreview] = useState(false);



  return (
    <div className="parchment-bg flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Cinzel Decorative' }}>
        Welcome adventurer!
      </h2>
      <h3 className="text-2xl mb-8">Tell me about yourself...</h3>

      <div className="w-full max-w-2xl mb-8">
        <div className="mb-6">
          <label className="block mb-2 text-lg">Player Name</label>
          <input
            type="text"
            value={character.name}
            onChange={(e) => setCharacter({ ...character, name: e.target.value })}
            className="fantasy-input"
            placeholder="Player Name"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-lg">Class</label>
          <select
            value={character.class}
            onChange={(e) => setCharacter({ ...character, class: e.target.value })}
            className="fantasy-select"
          >
            {classes.map((cls) => (
              <option key={cls}>{cls}</option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-lg">Race</label>
          <select
            value={character.race}
            onChange={(e) => setCharacter({ ...character, race: e.target.value })}
            className="fantasy-select"
          >
            {races.map((race) => (
              <option key={race}>{race}</option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-lg">Personality Trait</label>
          <select
            value={character.trait}
            onChange={(e) => setCharacter({ ...character, trait: e.target.value })}
            className="fantasy-select"
          >
            {traitOptions.map((trait) => (
              <option key={trait} value={trait}>
                {trait}
              </option>
            ))}
          </select>
        </div>

      </div>

      <div className="flex gap-4">
        <button onClick={onBack} className="wooden-button text-lg">
          Back
        </button>
        <button onClick={onStartGame} className="wooden-button text-lg">
          Continue
        </button>
        <button onClick={() => setShowPreview(true)} className="wooden-button mt-4">
          Preview Character
        </button>

      </div>
      {showPreview && (<CharacterPreview character={character} onClose={() => setShowPreview(false)} />)}
      
    </div>
  );
}
