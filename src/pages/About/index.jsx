import AboutBanner from "../../components/AboutBanner"
import Collapse from "../../components/Collapse"
import { housingList } from "../../datas/logements";
import "../About/About.scss"


function About() {
  const aboutTemplate = ['La bienveillance fait partie des valeurs fondatrices de Kasa.\n Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'];
  const equipmentList = [];

  housingList.map(({equipments}) => {
    equipmentList.push(equipments);
  });


  return (
      <div>
        <AboutBanner />
        <section className="collapse">
        <Collapse label="Responsabilité" collapseDescription={aboutTemplate}/>
        <Collapse label="Respect" collapseDescription={aboutTemplate}/>
        <Collapse label="Service" collapseDescription={aboutTemplate}/>
        <Collapse label="Sécurité" collapseDescription={equipmentList}/>
        </section>
      </div>
    )
  }
  
  export default About