import React, {useState, useEffect, useRef, useContext } from "react";
import "./Header.css";
import logo from "../../assets/images/logo-a.png";
import logo_s from "../../assets/images/long-logo.png";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LanguageIcon from "@mui/icons-material/Language";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { Link,useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import axios from 'axios';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [data, setData] = useState(undefined);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const navigate = useNavigate();
  const {user, ready, setUser} = useContext(UserContext);
  const location = [
    "All",
    "Pretoria",
    "Sandton",
    "Woodmead",
    "Hyde Park",
    "Port Elizabeth",
];
  const onOptionChangeHandler = (event) => {
    setData(event.target.value);
    
    };

    const [guestCount, setGuestCount] = useState(1);
  const [showGuestPopup, setShowGuestPopup] = useState(false);
  const popupRef = useRef(null);
  const handleOnGuestChange = (operation) => {
    setGuestCount((prevCount) => {
      const newCount =
        operation === "increment" ? prevCount + 1 : prevCount - 1;
      return Math.max(1, Math.min(10, newCount));
    });
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setShowGuestPopup(false);
    }
  };

   const handleSignout = async () =>{
    await axios.post('/signout');
    setUser(null);
    navigate('/');
  }
  useEffect(() => {
    if (showGuestPopup) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showGuestPopup]);

  const handleSearch = () => {
    
  navigate('/search-standard');
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <Link to="/">
        <img src={isScrolled ? logo_s : logo} alt="logo" className="header-logo" />
        </Link>
        {/* Display header text if not scrolled */}
        {!isScrolled ? (
          <div className="header-text">
            <p>Places to stay</p>
            <p>Experiences</p>
            <p>Online Experiences</p>
          </div>
        ) : (
          // Display search bar in the same place as header text when scrolled
          <div className="search-bar-container">
            <div className="search-bar">
              <div className="search-bar-text">Anywhere</div>
              <div className="search-bar-text">Any week</div>
              <div className="search-bar-text2">Add guests</div>
              <div className="search-icon-div">
                <SearchRoundedIcon className="search-icon" />
              </div>
            </div>
          </div>
        )}

        <div className="profile-container">
          <div className={`become-a-host ${isScrolled ? 'scrolled' : ''}`}>
          {ready && user && user.role === 'host' && (
              <span className="link">{user.username}</span>
            )}
            {ready && user && user.role === 'user' && (
              <AccountCircleIcon />
            )}
            {ready && user && user.role !== 'host' && (
              <Link to='/signin' className={`link ${isScrolled ? 'scrolled' : ''}`}>
                Become a host
              </Link>
            )}
            </div>
            <div className="become-a-host">
            <LanguageIcon className={`lang-icon ${isScrolled ? 'scrolled' : ''}`} sx={{ fontSize: "1.3rem" }} />
            </div>
            <div className="profile-div">
              <div className="dropdown">
                <MenuRoundedIcon className="dropbtn" />
                <div className="dropdown-content">
                  
                  {!user ? (
                   <div>
                   <span onClick={() => navigate('/signin')} className='link'>Sign In</span>
                   <span onClick={() => navigate('/signup')} className='link'>Sign Up</span>
                 </div>
                  ):(
                    
                     <>
                     <span onClick={() => navigate('/create-listing')} className='link'>Create Listing</span>
                     <span onClick={() => navigate('/reservations')} className='link'>View reservations</span>
                     <span onClick={() => navigate('/listings')} className='link'>View Listings</span>
                     <span onClick={() => navigate('/profile')} className='link'>Profile</span>
                     <span onClick={handleSignout} className='link'>Signout</span>
                     </>
                  )}
                </div>
              </div>
              <AccountCircleIcon/>
            </div>
          </div>
        
        </div>
      
      {/* SearchBox remains hidden on scroll */}
      {!isScrolled && <div className="header-bottom">
        <div className="header-search">
          <div className="search-where">
            <div>Hotels</div>
            <div className="search-input">
            <select onChange={onOptionChangeHandler}>
                <option>Location</option>
                {location.map((option, index) => {
                    return (
                        <option key={index}>
                            {option}
                        </option>
                    );
                })}
            </select>
            </div>
          </div>
          <div className="border-divider"></div>
          <div className="search-checkin">
            <div>Check In</div>
            <div className="search-button">
            <DatePicker
              selected={checkInDate}
              onChange={(date) => setCheckInDate(date)}
              placeholderText="Add dates"
              className="date-picker"
            />
            </div>
          </div>
          <div className="border-divider"></div>
          <div className="search-checkout">
            <div>Check Out</div>
            <div className="search-button">
            <DatePicker
              selected={checkOutDate}
              onChange={(date) => setCheckOutDate(date)}
              placeholderText="Add dates"
              className="date-picker"
            />
            </div>
          </div>
          <div className="border-divider"></div>
          <div className="search-who">
              <span>
                Guests
              </span>
              <div
                className="search-button"
                onClick={() => setShowGuestPopup(true)}
              >
                {guestCount > 0 ? `Add Guest` : `${guestCount} Guest`}
              </div>
            </div>
            {showGuestPopup && (
              <div className="guest-popup" ref={popupRef}>
                <div className="guest-selector">
                  <div
                    className="guest-button"
                    onClick={() => handleOnGuestChange("decrement")}
                  >
                    <RemoveIcon />
                  </div>
                  <input
                    type="number"
                    value={guestCount}
                    readOnly
                    className="guest-input"
                  />
                  <div
                    className="guest-button"
                    onClick={() => handleOnGuestChange("increment")}
                  >
                    <AddIcon />
                  </div>
                </div>
              </div>
            )}
          <div className="search">
          <SearchIcon className="search-icon" onClick={handleSearch} />
          </div>
        </div>
      </div>}

      
    </>
  );
};

export default Header;
