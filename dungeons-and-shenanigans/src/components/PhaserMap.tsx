import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import MapScene from '../game/MapScene';

export default function PhaserMap() {
  const gameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gameRef.current) return;

    const game = new Phaser.Game({
      type: Phaser.AUTO,
      width: 640,
      height: 640,
      parent: gameRef.current,
      scene: [MapScene],
      physics: { default: 'arcade' },
    });

    return () => {
      game.destroy(true);
    };
  }, []);

  return <div ref={gameRef} />;
}
