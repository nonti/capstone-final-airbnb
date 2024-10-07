import React, {useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import WifiIcon from '@mui/icons-material/Wifi';
import TvIcon from '@mui/icons-material/Tv';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import HeatPumpIcon from '@mui/icons-material/HeatPump';
import GrassIcon from '@mui/icons-material/Grass';
import PetsIcon from '@mui/icons-material/Pets';
import AirIcon from '@mui/icons-material/Air';
const CreateListing = () => {
  const {actions} =  useParams();
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    locationTitle: '',
    description: '',
    price: '',
    bathrooms: '',
    bedrooms: '',
    type: '',
    guests: '',
    beds: '',
    photos: [],
    amenities: [],
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  }
  
  const handleSubmit = (e) => {

  }
  return (
    
      <>
      <div>
        <h1>Create new place</h1>
        <form className='create-form'>
          <div className='inputs'>
          <input type='text' placeholder='Title' name='title' value={formData.title} onChange={handleChange}/>
          </div>
          <div className='inputs'>
      <input type='text' placeholder='Location' name=' location' value={formData.location} onChange={handleChange}/>
      </div>
      <div className='inputs'>
      <input type='text' placeholder='Location title' name='locationTitle' value={formData.locationTitle} onChange={handleChange}/>
      </div>
      <div className='inputs'>
      <textarea placeholder='Description' name='description' value={formData.description} onChange={handleChange}/>
      </div>
      <div className='inputs'>
      <input type='text' placeholder='Type' name='type' value={formData.type} onChange={handleChange}/>
      </div>
      <div className='inputs'>
      <input type='number' placeholder='Guest' name='guest' value={formData.guest} onChange={handleChange}/>
      </div>
      <div className='inputs'>
      <input type='number' placeholder='Bedroom' name='bedroom' value={formData.bedroom} onChange={handleChange}/>
      </div>
      <div className='inputs'>
      <input type='number' placeholder='Bed' name='bed' value={formData.bed} onChange={handleChange}/>
      </div>
      <div className='inputs'>
      <input type='number' placeholder='Bathroom' name=' bath' value={formData.bath} onChange={handleChange}/>
      </div>
      <div className='amenities'>
        <label>
      <input type='checkbox' />
      <span><TvIcon/>TV</span>
      </label>
      <label>
      <input type='checkbox' />
      <span><WifiIcon/>Wifi</span>
      </label>
      <label>
      <input type='checkbox' />
      <span><LocalParkingIcon/>Parking</span>
      </label>
      <label>
      <input type='checkbox' />
      <span><GrassIcon/>Garden</span>
      </label>
      <label>
      <input type='checkbox' />
      <span><PetsIcon/>Pets allowed</span>
      </label>
      <label>
      <input type='checkbox' />
      <span><AirIcon/>Air conditioning</span>
      </label>
      <label>
      <input type='checkbox' />
      <span><HeatPumpIcon/>Heating</span>
      </label>
      </div>
      <div className='inputs'>
      <input type='file' placeholder='Photos' />
      <button>Upload from device <AddPhotoAlternateIcon/></button>
      </div>
      <div className='inputs'>
      <input type='text' placeholder='Add photo by link' />
      <button>add photo</button>
      </div>

      <div className='inputs'>
          <input type='text' placeholder='Price' name='price' value={formData.price}onChange={handleChange}/>
                    </div>

      <button>Save</button>
        </form>
      </div>
    </>

    
  )
}

export default CreateListing