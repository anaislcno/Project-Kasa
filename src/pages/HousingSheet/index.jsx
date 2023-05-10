import '../HousingSheet/HousingSheet.scss'
import Collapse from "../../components/Collapse"
// import { housingList } from "../../datas/logements";


function HousingSheet() {
  const aboutTemplate = ['La bienveillance fait partie des valeurs fondatrices de Kasa.\n Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'];
  
  // const equipmentList = [];

  // housingList.map(({equipments}) => {
  //   equipmentList.push(equipments);
  // });


  return (
      <div>
        <section className="housing__collapse">
        <Collapse label="Description" collapseDescription={aboutTemplate}/>
        <Collapse label="Équipements" collapseDescription={aboutTemplate}/>
        </section>
      </div>
    )
  }
  
  export default HousingSheet