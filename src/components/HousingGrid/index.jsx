import React from "react";
import { housingList } from "../../datas/logements";
import '../../styles/HousingGrid.scss'

function HousingGrid() {
  return (
    <ul className="container">
      {housingList.map(({ id, title, cover }) =>
      <div key={id} className="card">
      <img src={cover} className="card__img" alt={`${title} cover`} />
      <h3 className="card__title">{title}</h3>
      </div>
      )}
    </ul>
  );
}

export default HousingGrid;

