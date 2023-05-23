import { Link } from "react-router-dom";
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
    <h1>Apartamenty w Kołobrzegu</h1>
   <p>Oferujemy najwyższej klasy apartamenty , położone w sąsiedztwie plaż oraz centrów komunikacyjnych miasta Kołobrzeg, zadowolą zarówno tych poszukujących ciszy i wypoczynku, jak i entuzjastów wieczornych szaleństw.</p>
   <Link to={'/apartment'} className="button-link" >Wybierz swój Apartament</Link>
  </div>
  )
}

export default Home