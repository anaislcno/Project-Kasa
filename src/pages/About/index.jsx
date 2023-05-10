import AboutBanner from "../../components/AboutBanner"
import Collapse from "../../components/Collapse"
import "../About/About.scss"


function About() {
  const aboutTemplate = ['La bienveillance fait partie des valeurs fondatrices de Kasa.\n Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'];

  return (
      <div>
        <AboutBanner />
        <section className="about__collapse">
        <Collapse label="Responsabilité" collapseDescription={aboutTemplate}/>
        <Collapse label="Respect" collapseDescription={aboutTemplate}/>
        <Collapse label="Service" collapseDescription={aboutTemplate}/>
        <Collapse label="Sécurité" collapseDescription={aboutTemplate}/>
        </section>
      </div>
    )
  }
  
  export default About