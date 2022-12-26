import React from "react";

export default function Tile(props) {
    return (<img className="tile" onClick={props.openTile} src={props.image} />);
};