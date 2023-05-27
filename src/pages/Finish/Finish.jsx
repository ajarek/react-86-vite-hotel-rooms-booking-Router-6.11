import { Link } from 'react-router-dom'
import './Finish.css'

const Finish = () => {
  return (
    <div className='finish'>
      <h2>
        Gratulacje, rezerwacja zrobiona! Sprawdź swoją skrzynkę e-mail ze
        wszystkimi szczegółami
      </h2>
      <Link
        className='button-link'
        to={'/apartment'}
      >
        Odkrywaj więcej
      </Link>
    </div>
  )
}

export default Finish
