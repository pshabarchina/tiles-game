import './App.css';
import Tile from "./components/Tile";
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';

function App() {
  const pictures = [
    {url: 'https://cdn2.thecatapi.com/images/b39.jpg', isOpened: false, id: '0'},
    {url: 'https://cdn2.thecatapi.com/images/JFPROfGtQ.jpg', isOpened: false, id: '1'},
    {url: 'https://cdn2.thecatapi.com/images/MTU1Njg0MQ.jpg', isOpened: false, id: '2'},
    {url: 'https://cdn2.thecatapi.com/images/e9e.jpg', isOpened: false, id: '3'},
    {url: 'https://cdn2.thecatapi.com/images/bai.jpg', isOpened: false, id: '4'},
    {url: 'https://cdn2.thecatapi.com/images/12l.jpg', isOpened: false, id: '5'},
    {url: "https://cdn2.thecatapi.com/images/b39.jpg", isOpened: false, id: '6'},
    {url: "https://cdn2.thecatapi.com/images/JFPROfGtQ.jpg", isOpened: false, id: '7'},
    {url: 'https://cdn2.thecatapi.com/images/MTU1Njg0MQ.jpg', isOpened: false, id: '8'},
    {url: 'https://cdn2.thecatapi.com/images/e9e.jpg', isOpened: false, id: '9'},
    {url: 'https://cdn2.thecatapi.com/images/bai.jpg', isOpened: false, id: '10'},
    {url: 'https://cdn2.thecatapi.com/images/12l.jpg', isOpened: false, id: '11'},
  ];

  const shuffledPictures = pictures;

  const [displayedShuffledPictures, setDisplayedShuffledPictures] = useState(pictures);
  const [openedTiles, setOpenedTiles] = useState([]);
  const [firstTileIsOpened, setFirstTileIsOpened] = useState(false);
  const [firstTileId, setFirstTileId] = useState('');
  const [firstTileUrl, setFirstTileUrl] = useState('');

  useEffect(() => {
    shuffle(shuffledPictures)
    setDisplayedShuffledPictures(shuffledPictures);
    console.log(displayedShuffledPictures);
  }, []);

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let secondTileId = '';
  let secondTileUrl = '';

  function openTile(e){ 
    if (openedTiles.includes(e.target.id)) return;

    alert('tile is opened!');

    if (!firstTileIsOpened) {
      setFirstTileIsOpened(true);
      setFirstTileId(e.target.id);
      setFirstTileUrl(e.target.closest('span').id)
      setOpenedTiles([...openedTiles, e.target.id]);
    }
    else {
      alert('opening second tile!');
      secondTileId = e.target.id;
      setOpenedTiles([...openedTiles, secondTileId]);
      secondTileUrl = e.target.closest('span').id;

      if (firstTileUrl === secondTileUrl) {
        alert('yes!');
        //can delete this if cause in this case we should do nothin at all
      }
      else {
        alert ('no :(((');
        let newOpenedTiles = [];
        for(let i = 0; i < openedTiles.length; i++) {
          if (openedTiles[i] !== firstTileId && openedTiles[i] !== secondTileId) {
            newOpenedTiles.push(openedTiles[i]);
          }
        }
        setOpenedTiles(newOpenedTiles);
      }

      setFirstTileIsOpened(false);
      setFirstTileId('');
      setFirstTileUrl('');
      secondTileId = '';
      secondTileUrl = '';

      if (openedTiles.length === 6) {
        alert('you are the winner!');// not going here at all...
      }
    }
  } 

  function createTile(i){
    return (<span key={nanoid()}><Tile openedTiles={openedTiles} displayedShuffledPictures={pictures} openTile={openTile} id={i}></Tile></span>)
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
