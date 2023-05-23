import { useNavigate } from 'react-router-dom'

import './Contact.css'

export const Contact = () => {
  const navigate = useNavigate()
  const onSubmit = (data) => {
    alert('Thank you ' + data.name)
    navigate('/')
  }
  return (
    <div className='contact'>
     Contact
    </div>
  )
}

export default Contact
