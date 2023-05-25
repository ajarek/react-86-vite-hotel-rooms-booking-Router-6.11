import { useState, useEffect } from 'react'
import './Apartment.css'
import data from '../../assets/data.json'
import { TbBrandCouchdb } from 'react-icons/tb'
import moment from 'moment'
const Apartment = () => {
  const [reservationSummary, setReservationSummary] = useState({})
  const [quantityApartment, setQuantityApartment] = useState(1)
  const [selectedDate1, setSelectedDate1] = useState(
    new Date().toISOString().split('T')[0]
  )
  const [selectedDate2, setSelectedDate2] = useState(
    new Date().toISOString().split('T')[0]
  )
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
  function getDaysDifference(date1, date2) {
    // Tworzenie obiektów Date na podstawie wybranych dat
    const dateObj1 = new Date(date1)
    const dateObj2 = new Date(date2)

    // Obliczanie różnicy w czasie między datami
    const timeDiff = Math.abs(dateObj2.getTime() - dateObj1.getTime())

    // Obliczanie liczby dni na podstawie różnicy czasu
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24))

    return daysDiff
  }
 
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
                    Łóżka {ap.beds}
                  </p>
                  <p>Osoby {ap.people}</p>
                  <p className='price'> PLN {ap.price}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className='reservation-summary'>
        <h2>Podsumowanie rezerwacji</h2>
         
        <div className='name'>
          {Object.values(reservationSummary)[0]}
          
         
        </div>
        <div className='quantity'>Ilość lokali:
        <input
            type='number'
            value={quantityApartment}
            onChange={(e) => setQuantityApartment(e.target.value)}
            min={1}
            max={9}
          />
           </div>
           <div>Doba hotelowa trwa <br /> od  15:00 do  12:00</div> 
           <div>Zakres dat:</div>
        <div className='reservation-date'>
          <div>
            <input
              type='date'
              value={selectedDate1}
              onChange={(event) => setSelectedDate1(event.target.value)}
            />
          </div>
          <div>
           
            <input
              type='date'
              value={selectedDate2}
              onChange={(event) => setSelectedDate2(event.target.value)}
            />
          </div>
        </div>
        <div>Doby: {getDaysDifference(selectedDate1, selectedDate2)}</div>
        <div className='people'>Osoby {Object.values(reservationSummary)[1]}</div>
        <div className='total'>
          Razem PLN{' '}
          {Object.values(reservationSummary)[2]
            ? ((+Object.values(reservationSummary)[2]) *
              quantityApartment *
              (getDaysDifference(selectedDate1, selectedDate2) > 0
                ? getDaysDifference(selectedDate1, selectedDate2)
                : 1)).toFixed(2)
            : 0}
        </div>
      </div>
    </div>
  )
}

export default Apartment
