import React from 'react';

type Props = {
  character: {
    name: string;
    class: string;
    race: string;
    trait: string;
  };
  onClose: () => void;
};

export default function CharacterPreview({ character, onClose }: Props) {
  return (
    <>
      <div className="overlay" onClick={onClose}></div>
      <div className="modal max-h-[80vh] overflow-y-auto fantasy-scroll p-6">
        <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Cinzel Decorative' }}>
          📜 Character Summary
        </h2>

        {/* Placeholder for AI Image */}
        <div className="mb-4">
          <div className="w-full h-48 bg-gray-300 border border-dashed border-gray-600 flex items-center justify-center text-gray-700 italic">
            Character Image Placeholder
          </div>
        </div>

        {/* Character details */}
        <ul className="text-lg space-y-2">
          <li><strong>Name:</strong> {character.name}</li>
          <li><strong>Race:</strong> {character.race}</li>
          <li><strong>Class:</strong> {character.class}</li>
          <li><strong>Trait:</strong> {character.trait}</li>
        </ul>

        <button onClick={onClose} className="wooden-button mt-6 w-full">
          Close Scroll
        </button>
      </div>
    </>
  );
}
