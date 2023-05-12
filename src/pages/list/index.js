//import { Link } from "react-router-dom";
import moment from "moment";
import TileList from "../../components/tileList";
import React, { useState, useEffect } from "react";

function ListPage() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  moment.locale("es-cl");

  let carretes = ["", "", "", "", "", ""];

  if (carretes.length === 0) {
    return (
      <div className="main-div">
        <h1>
          No encontramos ningun <span className="white-out"> carrete </span>
          entre el
          <span className="white-out">
            {" " + moment().format("DD/MM/YYYY")}
          </span>{" "}
          y el
          <span className="white-out">
            {" " + moment().add(3, "months").format("DD/MM/YYYY")}
          </span>
        </h1>
      </div>
    );
  }
  return (
    <div className="main-div-list">
      <div
        className={
          scrollPosition === 0 ? "fixed-title-div-top" : "fixed-title-div"
        }
      >
        <h1 className="fixed-title-h1">
          Mostrando {carretes.length}
          <span className="white-out">
            {" "}
            {carretes.length === 1 ? "carrete" : "carretes"}{" "}
          </span>
          entre el
          <span className="white-out">
            {" " + moment().format("DD/MM/YYYY")}
          </span>{" "}
          y el
          <span className="white-out">
            {" " + moment().add(3, "months").format("DD/MM/YYYY")}
          </span>
        </h1>
      </div>
      <TileList></TileList>
    </div>
  );
}

export default ListPage;
