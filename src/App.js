import './App.css';
import Tile from "./components/Tile";
import { nanoid } from 'nanoid';


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

  let firstTileIsOpened = false;
  let secondTileIsOpened = false;
  let firstTileId = '';
  let secondTileId = '';

  function openTile(e){
    alert('tile is opened!');
    if (!firstTileIsOpened) {
      firstTileIsOpened = true;
      firstTileId = e.target.id;
      
      console.log(firstTileId);
    }
    else {
      secondTileIsOpened = true;
      secondTileId = e.target.id;

      console.log(secondTileId);
      if (firstTileId === secondTileId) {
        alert('yes!')
        //exclude tiles from game
      }
      else {
        alert ('no :(((')
      }

      firstTileIsOpened = false;
      secondTileIsOpened = false;
      firstTileId = '';
      secondTileId = '';
    }
  }

  let tilesRow1 = [];
  let tilesRow2 = [];
  let tilesRow3 = [];

  for (let i = 0; i < 4; i++) {
    tilesRow1.push((<span key={nanoid()}><Tile image={pictures[i].url} id={pictures[i].url} openTile={openTile}></Tile></span>))
  }

  for (let i = 4; i < 8; i++) {
    tilesRow2.push((<span key={nanoid()}><Tile image={pictures[i].url} id={pictures[i].url} openTile={openTile}></Tile></span>))
  }

  for (let i = 8; i < 12; i++) {
    tilesRow3.push((<span key={nanoid()}><Tile image={pictures[i].url} id={pictures[i].url} openTile={openTile}></Tile></span>))
  }

  return (
    <div>
      <div className="board-row">{tilesRow1}</div>
      <div className="board-row">{tilesRow2}</div>
      <div className="board-row">{tilesRow3}</div>
    </div>
  );
}

export default App;
