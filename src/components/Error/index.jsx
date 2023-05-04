import Error404 from "../../assets/404.svg"

function Error() {
    return (
      <div>
        <img src={Error404} alt=""></img>
        <h1>Oups! La page que vous avez demandé n'existe pas.</h1>
        <p>Retourner sur la page d'accueil</p>
      </div>
    )
  }
  
  export default Error