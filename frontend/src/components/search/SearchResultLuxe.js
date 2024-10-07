import React from 'react';
import './Search.css';
import { Button } from '@mui/material';
import SearchResult from './SearchResult';

const SearchPage = () => {
  return (
     <div className='search-page'>
      <div className='search-page-info'>
        <p>62 stays . 28 June to 30 June 2024 . 2 guests</p>
        <h1>Stays neraby</h1>
        <Button variant='outlined'>Cancellation Flexibility</Button>
        <Button variant='outlined'>Type of Place</Button>
        <Button variant='outlined'>Price</Button>
        <Button variant='outlined'>Rooms and Beds</Button>
        <Button variant='outlined'>More filters</Button>
      </div>
      <SearchResult
        img='https://a0.muscache.com/im/pictures/miso/Hosting-577907266856058227/original/8143de64-4e3a-433e-8bc5-f333ef75fc1a.jpeg?im_w=720'
        location='Cape Town, SA'
        title='Rooftop, No Load/watershedding, Luxury'
        description='Entire villa in Cape Town, South Africa'
        star={4.84}
        price='R1000 per night'
        total='R3000'
      />
      <SearchResult
        img='https://a0.muscache.com/im/pictures/c136020a-4db8-4bc1-851e-8bee0a87ea54.jpg?im_w=720'
        location='Ladysmith, SA'
        title='Hermitage Vista'
        description='Farm stay in Ladismith, South Africa'
        star={5}
        price='R900 per night'
        total='R2700'
      />
      <SearchResult
        img='https://a0.muscache.com/im/pictures/8a63f68b-e670-4a9a-8a4b-a016a0ee78d8.jpg?im_w=720'
        location='Ladysmith, SA'
        title='Aardvark Bioreserve Zebra cottage near Ladismith'
        description='Luxurious stone cave in Crete, pool, sea view'
        star={4.84}
        price='R1200 per night'
        total='R3600'
      />
      </div>
  )
}

export default SearchPage;
