import Phaser from 'phaser';

export default class MapScene extends Phaser.Scene {
  constructor() {
    super('MapScene');
  }

  preload() {
    // Load the tileset image (make sure you have this file locally)
    this.load.image('tiles', '/tilesets/dungeon_tiles.png');
    
    // Load a simple tilemap data (hardcoded for now)
    this.load.tilemapTiledJSON('map', '/tilemaps/simple-map.json');
  }

  create() {
    const map = this.make.tilemap({ key: 'map' });
    const tileset = map.addTilesetImage('dungeon', 'tiles');
    map.createLayer('Ground', tileset!, 0, 0);
  }
}
