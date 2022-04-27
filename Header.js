import React from 'react'
import './header.css'

function Header() {
  return (
    <div className="header">
      <img
        className="headerImg"
        src={process.env.PUBLIC_URL + '/images/food2.jpg'}
        alt="image here"
      />
      <div className="headerTitle">
        <div className="headerTitleIntro">
          <h2> Welcome to Side Hustle Group 20 Restaurant</h2>
        </div>
        <div className="headerButton">
          <button className="Button1" type="submit">Your Order </button>
          <button className="Button2" type="submit">Book a Table </button>
        </div>
      </div>
    </div>
  )
}

export default Header
