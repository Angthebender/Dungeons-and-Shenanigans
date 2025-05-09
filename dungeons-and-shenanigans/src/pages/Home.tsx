import React from 'react';

type Props = {
  onStart: () => void;
  onContinue: () => void;
};

export default function Home({ onStart, onContinue }: Props) {
  return (
    <div className="parchment-bg flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold mb-4 text-[#d4a017]" style={{ fontFamily: 'Cinzel Decorative' }}>
        Dungeons & Shenanigans
      </h1>
      <h2 className="text-2xl mb-12">Make your own fantasy story</h2>
      <div className="flex flex-col gap-6">
        <button onClick={onStart} className="wooden-button text-2xl">
          Start Game
        </button>
        <button onClick={onContinue} className="wooden-button text-2xl">
          Continue Game
        </button>
      </div>
    </div>
  );
}
