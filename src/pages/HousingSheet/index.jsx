import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { housingList } from "../../datas/logements";
import '../HousingSheet/HousingSheet.scss'
import Collapse from "../../components/Collapse"
import Tags from '../../components/Tags';
import HostCard from '../../components/HostCard';
import Rating from '../../components/Rating';
import Slideshow from '../../components/Slideshow';

function HousingSheet() {
  const { id } = useParams();
  const housing = housingList.find((housing) => housing.id === id)

  if(!housing) {
    return <Navigate to="/error" />;
  }

  const { description, equipments, tags, title, location, rating, pictures } = housing;
  const host = housing.host;

  return (
      <div className='housing-sheet'>
        <Slideshow pictures={pictures}/>
        <div  className='global-container'>
          <section className='informations-container'>
            <div className='housing__infos'>
            <h1>{title}</h1>
            <h3>{location}</h3>
            </div>
            <Tags tags={tags}/>
          </section>
          <section className='housing__additional-infos'>
            <HostCard host={host}/>
            <Rating rate={rating}/>
          </section>
        </div>
        <section className="housing__collapse">
          <Collapse label="Description" collapseDescription={[description]}/>
          <Collapse label="Équipements" collapseDescription={equipments}/>
        </section>
      </div>
    )
  }
  
  export default HousingSheet