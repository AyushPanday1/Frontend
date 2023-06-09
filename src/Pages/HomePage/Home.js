import React, { useState, useEffect } from 'react'
import "./Home.css"
import Navbar from '../../Components/Navbar/Navbar'
import Chat from '../../Components/Chat/Chat'
import ShopCard from '../../Components/ShopCard/ShopCard'
import axios from 'axios';
import DeliveryColletions from '../../Components/deliveryCollections'
import TopBrands from './../../Components/topBrands/index';
import Footer from '../../Components/footer/footer'



function Home() {

  //ftech restorent

  const [resto, SetResto] = useState([]);

  useEffect(() => {
    axios.get("https://onifood.glitch.me//shop")
      .then((responce) => {
        SetResto(responce.data.data);
      })
      .catch((err) => alert(err.response.data.message) );
  }, []);



  return (
    <div>
      <Navbar />
      <DeliveryColletions/>
      <TopBrands/>
      <Chat />
      <ShopCard resto={resto} />
      <Footer />
    </div>
  )
}

export default Home
