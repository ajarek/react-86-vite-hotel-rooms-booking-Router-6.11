import './Apartment.css'
import data from '../../assets/data.json'
import {TbBrandCouchdb } from 'react-icons/tb';
const Apartment = () => {
  const saveLocalStorage=(name,people,price)=>{
    const summary={
      name:name,
      people:people,
      price:price
    }
    console.log(summary);
  }
  return (
    <div className='apartment'>
      <div className="cards-wrapper">
      {data.map((ap)=>{
        return(
          <div key={ap.id} className="card" onClick={()=>saveLocalStorage(ap.name,ap.people,ap.price)}>
            <div className="img"><img src={ap.src} alt="" /></div>
            <div className="apartment-wrapper">
            <p className='name'>{ap.name}</p>
            <p>{ap.description}</p>
            <p>{ap.size}</p>
            <div className="info-wrapper">
            <p className='beds'><TbBrandCouchdb />Beds {ap.beds}</p>
            <p>People {ap.people}</p>
            <p className='price'> PLN {ap.price}</p>
            </div>
            </div>
          </div>
        )
      })}
      </div>
      <div className="reservation-summary">
        <h2>Reservation Summary</h2>
      </div>
    </div>
  )
}

export default Apartment