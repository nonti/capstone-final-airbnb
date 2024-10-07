import React from 'react'
import './Experiences.css';
const Experiences = () => {
  return (
    <div>
      <div className="home-section">
    <p className="home-heading">Discover Airbnb Experiences</p>
  </div>
  <div className="home-section">
    <div className="img-container-canyon">
      <p>
        Things to do <br />on your trip
      </p>
      <button className="btn">Experiences</button>
    </div>
    <div className="img-container-chef">
      <p>
        Things to do <br /> from home
      </p>
      <button className="btn">Online Experiences</button>
    </div>
  </div></div>
  )
}

export default Experiences