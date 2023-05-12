import { Link } from "react-router-dom";

function CreatePage() {
  return (
    <div className="main-div">
      <div className="form-box-div">
        <div className="x-1">
          <input
            className="bs-clear-input"
            type="text"
            placeholder="Nombre del evento"
          />
        </div>
        <div className="x-1">
          <input
            className="bs-clear-input"
            type="text"
            placeholder="Ubicacion del evento"
          />
        </div>
        <div className="x-2">
          <input
            className="bs-clear-input half-left"
            type="text"
            placeholder="Fecha"
          />
          <input
            className="bs-clear-input half-right"
            type="text"
            placeholder="Hora"
          />
        </div>
        <div className="x-1">
          <div className="x-1">
            <input
              className="bs-clear-input"
              type="text"
              placeholder="Enlace"
            />
          </div>
        </div>
        <div className="x-1">
          <div className="x-1">
            <input
              className="bs-clear-input"
              type="text"
              placeholder="Precio de entrada"
            />
          </div>
        </div>
        <Link to="/home">
          <button className="green-button-div">
            <p className="green-button-text">Guardar</p>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CreatePage;
