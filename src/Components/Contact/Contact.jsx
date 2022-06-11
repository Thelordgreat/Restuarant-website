import React from 'react'
import './Contact.css'
import { MdFoodBank } from 'react-icons/md'

const Contact = () => {
  return (
    <div className='container'>
      <div className="contact_container">
        <div>
          <h3 className='logo'><MdFoodBank/> Yummie</h3>
          <form>
            <div className="form_container">
              <h3>Let's partner up</h3>
              <h5>Give your belly the treat it deserves</h5>

              <input type="text" placeholder='Name' />

              <input type="email" placeholder='Email' />

              <input type="number" placeholder='+1(234)567-8900' />

              <input type="text" placeholder='Why do you need us?' className='message' />


              <div className='btn btn-success'> Contact Us!</div>
            </div>

            <p>Prefer email? <a href="accounts.google.com">xyz@gmail.com</a></p>
          </form>
        </div>

        <div className="img_space">
          <h2>We are a renowed restuarant with more than 50 walk-in locations nationwide to get all your exquisite meals</h2>
        </div>
      </div>
    </div>
  )
}

export default Contact