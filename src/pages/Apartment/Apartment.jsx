import { useState, useEffect } from 'react'
import './Apartment.css'
import data from '../../assets/data.json'
import { TbBrandCouchdb } from 'react-icons/tb'
const Apartment = () => {
  const [reservationSummary, setReservationSummary] = useState({})
  const [quantityApartment, setQuantityApartment] = useState(1)
  const addSummary = (name, people, price) => {
    const summary = {
      name: name,
      people: people,
      price: price,
    }
    setReservationSummary(summary)
  }
  useEffect(() => {
    const storedSummary = JSON.parse(localStorage.getItem('summary'))
    if (storedSummary) {
      setReservationSummary(storedSummary)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('summary', JSON.stringify(reservationSummary))
  }, [reservationSummary])

  return (
    <div className='apartment'>
      <div className='cards-wrapper'>
        {data.map((ap) => {
          return (
            <div
              key={ap.id}
              className='card'
              onClick={() => addSummary(ap.name, ap.people, ap.price)}
            >
              <div className='img'>
                <img
                  src={ap.src}
                  alt=''
                />
              </div>
              <div className='apartment-wrapper'>
                <p className='name'>{ap.name}</p>
                <p>{ap.description}</p>
                <p>{ap.size}</p>
                <div className='info-wrapper'>
                  <p className='beds'>
                    <TbBrandCouchdb />
                    Beds {ap.beds}
                  </p>
                  <p>People {ap.people}</p>
                  <p className='price'> PLN {ap.price}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className='reservation-summary'>
        <h2>Reservation Summary</h2>

        <p className='name'>
          {Object.values(reservationSummary)[0]}
          
          <input
            type='number'
            value={quantityApartment}
            onChange={(e) => setQuantityApartment(e.target.value)}
            min={1}
            max={9}
          />
         pcs
        </p>
        <p className='people'>People {Object.values(reservationSummary)[1]}</p>
        <p className='total'>
          Total PLN{' '}
          {Object.values(reservationSummary)[2]
            ? (+Object.values(reservationSummary)[2]).toFixed(2)*quantityApartment
            : 0}
        </p>
      </div>
    </div>
  )
}

export default Apartment
