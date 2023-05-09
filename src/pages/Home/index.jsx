import Banner from "../../components/Banner"
import HousingGrid from "../../components/HousingGrid"
import '../../styles/Home.scss'

function Home() {
    return (
      <div className="homepage">
        <Banner />
        <HousingGrid />
      </div>
    )
  }
  
  export default Home