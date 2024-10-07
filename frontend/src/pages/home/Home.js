import React from 'react'
import './Home.css';
import Header from '../../components/header/Header';
import Banner from '../../components/banner/Banner';
import CardTiles from '../../components/card/CardTiles';
import Experiences from '../../components/experience/Experiences';
import GiftCards from '../../components/gift/GiftCard';
import Host from '../../components/host/Host';
import Inspiration from '../../components/inspiration/Inspiration';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <div>
      <Banner/>
      <CardTiles/>
      <Experiences/>
      <GiftCards/>
      <Host/>
      <Inspiration/>
      <Footer/>
    </div>
  )
}

export default Home