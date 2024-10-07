import React from 'react';
import Home from './pages/home/Home';
import Signin from './pages/auth/Signin';
import Signup from './pages/auth/Signup';
import Admin from './pages/admin/Admin';
import {Routes, Route} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import axios from 'axios';
import SearchPage from './components/search/SearchResultLuxe';
import Reservations from './pages/reservations/Reservations';
import Header from './components/header/Header';
import CreateListing from './pages/listing/CreateListing';
import Listings from './pages/listing/Lisitings';


axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.withCredentials = true;
const App = () => {
  return (
    <>
    <Header/>
      <ToastContainer/>
      <Routes>
      <Route index path='/' element={<Home/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/search' element={<SearchPage/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/admin/:subpage?' element={<Admin/>}/>
        <Route path='/admin/create' element={<CreateListing/>}/>
        <Route path='/admin/reservations' element={<Reservations/>}/>
        <Route path='/admin/listings' element={<Listings/>}/>
        
      </Routes>
      </>
  )
}

export default App
