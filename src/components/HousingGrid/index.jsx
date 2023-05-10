import React from "react";
import { Link } from "react-router-dom";
import { housingList } from "../../datas/logements";
import '../HousingGrid/HousingGrid.scss'

function HousingGrid() {
  return (
    <ul className="container">
      {housingList.map(({ id, title, cover }) =>
      <div key={id} className="card">
        <Link className="card__link" to="/housing">
        <img src={cover} className="card__img" alt={`${title} cover`} />
        </Link>
        <h3 className="card__title">{title}</h3>
      </div>
      )}
    </ul>
  );
}

export default HousingGrid;