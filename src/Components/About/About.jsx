import React from 'react'
import './About.css'
import { MdFastfood }from 'react-icons/md'
import { GiMeal } from 'react-icons/gi'
import { HiCake } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section>
      <div className="about__container">
          <div className="about__img">
            <div className="about__img__text">
              <h2>Customer Satisfaction Is Our Main Priority</h2>
                <Link to={'./products'}><a href="google.com" className='btn'>View Menu</a></Link>
            </div>
          </div>

          <div className="about__body__content">
            <div className="about__body__text">
              <h2>About Us</h2>

              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta totam assumenda qui est pariatur earum eum sit, amet culpa autem recusandae nulla quod magni omnis minus molestias ab molestiae magnam.</p>
            </div>

            <div className="about__boxes__container">
              <div className="box">
                  <MdFastfood className='icon'/>
                  <h3>Food</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum tempora laboriosam iste exercitationem non</p>

                  <Link to={'./products'}><a href="google.com" className='btn'>View Service</a></Link>
              </div>

              <div className="box">
                  <GiMeal className='icon'/>
                  <h3>Dishes</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum tempora laboriosam iste exercitationem non</p>

                  <Link to={'./products'}><a href="google.com" className='btn'>View Service</a></Link>
              </div>

              <div className="box">
                  <HiCake className='icon'/>
                  <h3>Birthdays</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum tempora laboriosam iste exercitationem non</p>

                  <Link to={'./products'}><a href="google.com" className='btn'>View Service</a></Link>
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default About