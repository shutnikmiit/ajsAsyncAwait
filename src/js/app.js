import json from './parser.js';
import read from './reader.js';
import GameSaving from './gamesaving.js';

let gameSave = new GameSaving();

const gameSaveLoad = (async () => {
  try {
    const readResolve = await read();
    const saving = await json(readResolve);
    gameSave = JSON.parse(saving);
    return gameSave;
  } catch (error) {
    throw new Error('Oops!');
  }
})();

export default gameSaveLoad;
