import './App.css';
import Tile from "./components/Tile";
import trio from "./trio.jpg";
import striped from "./striped.jpg";
import orange from "./orange.jpg";
import band from "./band.jpg";
import bow from "./bow.jpg";
import tie from "./tie.jpg";
import { nanoid } from 'nanoid';
import { useState } from 'react';

function App() {
  const pictures = [
    {url: `${trio}`, isOpened: false, id: '0'},
    {url: `${striped}`, isOpened: false, id: '1'},
    {url: `${orange}`, isOpened: false, id: '2'},
    {url: `${band}`, isOpened: false, id: '3'},
    {url: `${bow}`, isOpened: false, id: '4'},
    {url: `${tie}`, isOpened: false, id: '5'},
    {url: `${trio}`, isOpened: false, id: '6'},
    {url: `${striped}`, isOpened: false, id: '7'},
    {url: `${orange}`, isOpened: false, id: '8'},
    {url: `${band}`, isOpened: false, id: '9'},
    {url: `${bow}`, isOpened: false, id: '10'},
    {url: `${tie}`, isOpened: false, id: '11'},
  ];

  const [displayedShuffledPictures, setDisplayedShuffledPictures] = useState(shuffle(pictures));
  const [openedTiles, setOpenedTiles] = useState([]);
  const [firstTileId, setFirstTileId] = useState('');
  const [firstTileUrl, setFirstTileUrl] = useState('');
  const [secondTileId, setSecondTileId] = useState('');
  const [secondTileUrl, setSecondTileUrl] = useState('');

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function openTile(e){
    if (openedTiles.includes(e.target.id)) return;
    if (firstTileId && secondTileId) return;

    if (!firstTileId) {
      setFirstTileId(e.target.id);
      setFirstTileUrl(e.target.closest('span').id)
      setOpenedTiles([...openedTiles, e.target.id]);
    }
    else {
      setSecondTileId(e.target.id);
      setOpenedTiles([...openedTiles, e.target.id]);
      setSecondTileUrl(e.target.closest('span').id);

      if (firstTileUrl !== e.target.closest('span').id){
        setTimeout(closeNotGuessedTiles, 1000, firstTileId, e.target.id)
        setTimeout(resetTiles, 1001);
      }
      else {
        resetTiles();
      }
    }
  } 

  function createTile(i){
    return (<span key={nanoid()}><Tile openedTiles={openedTiles} displayedShuffledPictures={displayedShuffledPictures} openTile={openTile} id={i}></Tile></span>)
  }

  function closeNotGuessedTiles(firstTileId, secondTileId) {
    const newOpenedTiles = openedTiles.filter(el => (el !== firstTileId && el !== secondTileId))
    setOpenedTiles(newOpenedTiles);
  }

  function resetTiles() {
    setFirstTileId('');
    setFirstTileUrl('');
    setSecondTileId('');
    setSecondTileUrl('');
  }


  return (
    <div className="container">
      <div className="board-row">{createTile(0)}{createTile(1)}{createTile(2)}{createTile(3)}</div>
      <div className="board-row">{createTile(4)}{createTile(5)}{createTile(6)}{createTile(7)}</div>
      <div className="board-row">{createTile(8)}{createTile(9)}{createTile(10)}{createTile(11)}</div>
    </div>
  );
}

export default App;
