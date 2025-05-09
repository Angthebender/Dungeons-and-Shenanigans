import React from 'react';

type Props = {
  onClose: () => void;
  onSaveAndLeave: () => void;
};

export default function SettingsModal({ onClose, onSaveAndLeave }: Props) {
  return (
    <div>
      <div className="overlay" onClick={onClose}></div>
      <div className="modal">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Cinzel Decorative' }}>
          Settings
        </h2>
        <div className="mb-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Sound Effects
          </label>
        </div>
        <div className="flex flex-col gap-2">
          <button onClick={onSaveAndLeave} className="wooden-button">
            Save and Leave
          </button>
          <button onClick={onClose} className="wooden-button">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
