import React from 'react'
import './GiftCard.css';
import gift_card from '../../assets/images/cards.png'
const GiftCard = () => {
  return (
    <div>
      <div className="home-section img-gift-card">
      <div className="gift-card-info">
          <p>Shop Airbnb <br />gift cards</p>
          <button className="btn-learn">Learn more</button>
        </div>
        <div className="gift-card-img">
          <img src={gift_card} alt="Airbnb Gift Cards" />
        </div>        
      </div>
    </div>
  )
}

export default GiftCard