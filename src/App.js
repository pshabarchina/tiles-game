import './App.css';
import Tile from "./components/Tile";
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';

function App() {
  const pictures = [
    {'url': "https://cdn2.thecatapi.com/images/b39.jpg"},
    {'url': "https://cdn2.thecatapi.com/images/JFPROfGtQ.jpg"},
    {'url': 'https://cdn2.thecatapi.com/images/MTU1Njg0MQ.jpg'},
    {'url': 'https://cdn2.thecatapi.com/images/e9e.jpg'},
    {'url': 'https://cdn2.thecatapi.com/images/bai.jpg'},
    {'url': 'https://cdn2.thecatapi.com/images/12l.jpg'},
    {'url': "https://cdn2.thecatapi.com/images/b39.jpg"},
    {'url': "https://cdn2.thecatapi.com/images/JFPROfGtQ.jpg"},
    {'url': 'https://cdn2.thecatapi.com/images/MTU1Njg0MQ.jpg'},
    {'url': 'https://cdn2.thecatapi.com/images/e9e.jpg'},
    {'url': 'https://cdn2.thecatapi.com/images/bai.jpg'},
    {'url': 'https://cdn2.thecatapi.com/images/12l.jpg'},
  ];

  const [openedTiles, setOpenedTiles] = useState([]);

  let firstTileIsOpened = false;
  let secondTileIsOpened = false;
  let firstTileId = '';
  let secondTileId = '';

  const shuffledPictures = pictures;
  
  useEffect(() => {
    shuffle(shuffledPictures);
  }, []);

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function openTile(e){
    if (openedTiles.includes(e.target.src)) return;

    alert('tile is opened!');


    if (!firstTileIsOpened) {
      firstTileIsOpened = true;
      firstTileId = e.target.src;
      console.log(firstTileId);
    }
    else {
      //check index so the same tile is not clicked!
      secondTileIsOpened = true;
      secondTileId = e.target.src;
      console.log(secondTileId);

      if (firstTileId === secondTileId) {
        alert('yes!')
        setOpenedTiles([...openedTiles, firstTileId]);
        console.log(openedTiles);
      }
      else {
        alert ('no :(((')
      }

      firstTileIsOpened = false;
      secondTileIsOpened = false;
      firstTileId = '';
      secondTileId = '';

      if (openedTiles.length === 6) {
        alert('you are the winner!');// not going here at all...
        setOpenedTiles([]);
        console.log(openedTiles);
      }
    }
  } 

  function createTile(i){
    return (<span key={nanoid()}><Tile openedTiles={openedTiles} id={i} shuffledPictures={shuffledPictures} openTile={openTile}></Tile></span>)
  }

  return (
    <div>
      <div className="board-row">{createTile(0)}{createTile(1)}{createTile(2)}{createTile(3)}</div>
      <div className="board-row">{createTile(4)}{createTile(5)}{createTile(6)}{createTile(7)}</div>
      <div className="board-row">{createTile(8)}{createTile(9)}{createTile(10)}{createTile(11)}</div>
    </div>
  );
}

export default App;
