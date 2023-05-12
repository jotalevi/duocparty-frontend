import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="main-div">
      <h4 className="duocparty-title-logo"> DuocParty </h4>
      <h1 className="big-green-title">
        Promociona tus carretes entre tus compañeros
      </h1>
      <div className="button-box">
        <Link to="/upcomming">
          <button className="green-button-div">
            <p className="green-button-text">Proximos eventos</p>
          </button>
        </Link>
        <Link to="/create">
          <button className="grey-button-div">
            <p className="grey-button-text">Crea un evento</p>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
