import React from 'react';
import '../HousingSheet/HousingSheet.scss'
import { useParams, Navigate } from 'react-router-dom';
import Collapse from "../../components/Collapse"
import Tags from '../../components/Tags';
import { housingList } from "../../datas/logements";
import HostCard from '../../components/HostCard';

function HousingSheet() {
  const { id } = useParams();
  const housing = housingList.find((housing) => housing.id === id)

  if(!housing) {
    return <Navigate to="/error" />;
  }

  const { description, equipments, tags } = housing;
  const host = housing.host;

  return (
      <div>
        <Tags tags={tags}/>
        <HostCard host={host}/>
        <section className="housing__collapse">
        <Collapse label="Description" collapseDescription={[description]}/>
        <Collapse label="Équipements" collapseDescription={equipments}/>
        </section>
      </div>
    )
  }
  
  export default HousingSheet