import Tile from "../tile";

function TileList() {
  let tiles = [];

  tiles.push(<Tile></Tile>);
  tiles.push(<Tile></Tile>);
  tiles.push(<Tile></Tile>);
  tiles.push(<Tile></Tile>);
  tiles.push(<Tile></Tile>);
  tiles.push(<Tile></Tile>);
  tiles.push(<Tile></Tile>);
  tiles.push(<Tile></Tile>);
  tiles.push(<Tile></Tile>);
  tiles.push(<Tile></Tile>);
  tiles.push(<Tile></Tile>);
  tiles.push(<Tile></Tile>);
  tiles.push(<Tile></Tile>);
  tiles.push(<Tile></Tile>);
  tiles.push(<Tile></Tile>);
  tiles.push(<Tile></Tile>);
  tiles.push(<Tile></Tile>);
  tiles.push(<Tile></Tile>);

  return <div className="list-div">{tiles}</div>;
}

export default TileList;
