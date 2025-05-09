import React from 'react';

type Props = {
  onSelect: (slotId: number) => void;
  onBack: () => void;
};

const saves = [
  { id: 1, name: 'Hero of Eldoria', level: 5, date: '2025-04-28' },
  { id: 2, name: 'Shadow of Gloom', level: 3, date: '2025-04-27' },
  { id: 3, name: 'Empty Slot', level: 0, date: '-' },
];

export default function ContinueGame({ onSelect, onBack }: Props) {
  return (
    <div className="parchment-bg flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-8" style={{ fontFamily: 'Cinzel Decorative' }}>
        Choose Your Saga
      </h2>

      <div className="w-full max-w-2xl mb-8">
        {saves.map((save) => (
          <div
            key={save.id}
            className="save-slot mb-4 cursor-pointer"
            onClick={() => save.level > 0 && onSelect(save.id)}
          >
            <p className="font-bold text-lg">{save.name}</p>
            <p>Level: {save.level}</p>
            <p>Last Played: {save.date}</p>
          </div>
        ))}
      </div>

      <button onClick={onBack} className="wooden-button text-lg">
        Back
      </button>
    </div>
  );
}
