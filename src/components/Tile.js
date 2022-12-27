import React from "react";

export default function Tile(props) {
    return (<img className="tile" onClick={props.openTile} src={props.openedTiles.includes(props.shuffledPictures[props.id].url) ? null : props.shuffledPictures[props.id].url} id={props.id}/>);
};