import './Apartment.css'
import data from '../../assets/data.json'
const Apartment = () => {
  return (
    <div className='apartment'>
      {data.map((ap)=>{
        return(
          <div key={ap.id} className="card">
            <div className="img"><img src={ap.src} alt="" /></div>
            <div className="apartment-wrapper">
            <p className='name'>{ap.name}</p>
            <p>{ap.description}</p>
            <p>{ap.size}</p>
            <p>{ap.beds}</p>
            <p>{ap.people}</p>
            <p>{ap.price} PLN</p>

            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Apartment