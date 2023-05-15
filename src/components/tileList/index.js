import Tile from "../tile";

function TileList(props) {
  let tiles = [];

  for (const carrete of props.carretes) tiles.push(<Tile></Tile>);

  return <div className="list-div">{tiles}</div>;
}

export default TileList;
