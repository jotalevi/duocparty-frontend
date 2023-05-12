import { Link } from "react-router-dom";

function EnterPage() {
  return (
    <div className="main-div">
      <h1 className="big-green-title">
        Bienvenido a <span className="white-out">DuocParty</span> El lugar
        perfecto para compartir y promocionar tus carretes entre tus compañeros
      </h1>
      <Link to="/home">
        <button className="green-button-div">
          <p className="green-button-text">Entrar</p>
        </button>
      </Link>
    </div>
  );
}

export default EnterPage;
