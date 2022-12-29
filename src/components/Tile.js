import React from "react";

export default function Tile(props) {
    return (<span id={props.displayedShuffledPictures[props.id].url}><img className="tile" 
    onClick={props.openTile} 
    src={props.openedTiles.includes(props.displayedShuffledPictures[props.id].id) ? props.displayedShuffledPictures[props.id].url : null} 
    id={props.displayedShuffledPictures[props.id].id} /></span>);
};