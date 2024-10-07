import React, { useContext } from 'react'
import { UserContext } from '../../context/userContext'
import { useNavigate, Link, useParams } from 'react-router-dom';
import CreateListing from '../listing/CreateListing';

const Admin = () => {
  const {ready, user}= useContext(UserContext)
  const navigate = useNavigate();
  let  subpage = useParams();
  if(subpage === undefined) {
    subpage = 'profile'
  }
  if(ready){
    return <div>Loading...</div>
  }
  if(ready && !user){
    return navigate('/signin');
  }

  const linkClasses = (type=null) => {
    let classes = 'admin-links'
    if(type === subpage ){
      classes += ' active'
    }
    return classes

  }
  return (
    <>
    <div className='admin-container'>
      <Link className={linkClasses('profile')} to='/profile'>Profile</Link>
      <Link className={linkClasses('listing')} to='/admin/listings'>View Listing</Link>
      <Link className={linkClasses('create')} to='/admin/create'>Create Listing</Link>
      <Link className={linkClasses('reservations')} to='/admin/reservations'>View reservations</Link>
    </div>
    {subpage === 'profile' && (
      <div>
        Logged in as {user.username}
      </div>
    )}

    {subpage === 'create' && (
      <CreateListing/>
    )}
    </>
  )
}

export default Admin