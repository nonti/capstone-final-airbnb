import React from 'react';
import './Search.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';

const SearchResult = ({ img,location, title, description, total, price, star}) => {
  return (
   <div className='search-result'>
      <img src={img} alt='' />
      <FavoriteBorderIcon className='search-result-heart' />
        <div className='search-result-info'>
          <div className='search-result-info-top'>
            <p>{location}</p>
            <h3>{title}</h3>
            <p>---</p>
            <p>{description}</p>
          </div>
        <div className='search-result-info-bottom'>
          <div className='search-result-stars'>
            <p>
              <strong><StarIcon className='star'/>{star}</strong>
            </p>
          </div>
          <div className='search-result-price'>
            <h2>{price}</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchResult
