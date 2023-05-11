import React from 'react';
import '../HousingSheet/HousingSheet.scss'
import { useParams, Navigate } from 'react-router-dom';
import Collapse from "../../components/Collapse"
import Tags from '../../components/Tags';
import { housingList } from "../../datas/logements";


function HousingSheet() {
  const { id } = useParams();
  const housing = housingList.find((housing) => housing.id === id)

  if(!housing) {
    return <Navigate to="/error" />;
  }

  const { description, equipments } = housing;

  return (
      <div>
        < Tags />
        <section className="housing__collapse">
        <Collapse label="Description" collapseDescription={[description]}/>
        <Collapse label="Équipements" collapseDescription={[equipments]}/>
        </section>
      </div>
    )
  }
  
  export default HousingSheet