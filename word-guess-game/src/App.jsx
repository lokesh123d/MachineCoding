import React from 'react'
import GameLayout from './components/game-layout'

const WORDS = [
  'APPLE','HOUSE','LIGHT','WATER','EARTH','STONE','PLANT','GRASS','RIVER','OCEAN',
  'CLOUD','RAIN','STORM','WIND','FIRE','SMOKE','FLAME','SPACE','STAR','MOON',
  'SUN','SKY','FIELD','FOREST','TREE','LEAF','ROOT','SEED','FRUIT','BREAD',
  'SWEET','SALT','SPICE','SUGAR','HONEY','DRINK','JUICE','MILK','TEA','COFFEE',
  'CHAIR','TABLE','DOOR','WINDOW','FLOOR','WALL','ROOM','HOUSE','BRIDGE','ROAD',
  'TRACK','TRAIN','PLANE','SHIP','BOAT','CAR','TRUCK','BIKE','WHEEL','ENGINE'
];


const App = () => {
  return <div>
    <GameLayout word={WORDS[Math.floor(Math.random()*WORDS.length-1)]} />
  </div>;
};
export default App;
