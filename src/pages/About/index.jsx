import AboutBanner from "../../components/AboutBanner"
import Collapse from "../../components/Collapse"
import "../About/About.scss"


function About() {
  const responsabilityTemplate = ["Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."];
  const respectTemplate = ["La bienveillance fait partie des valeurs fondatrices de Kasa.\n Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."];
  const serviceTemplate = ["Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."]
  const securityTemplate = ["La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."]

  return (
      <div>
        <AboutBanner />
        <section className="about__collapse">
        <Collapse label="Responsabilité" collapseDescription={responsabilityTemplate}/>
        <Collapse label="Respect" collapseDescription={respectTemplate}/>
        <Collapse label="Service" collapseDescription={serviceTemplate}/>
        <Collapse label="Sécurité" collapseDescription={securityTemplate}/>
        </section>
      </div>
    )
  }
  
  export default About