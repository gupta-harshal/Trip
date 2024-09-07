import React from 'react'
import Hotel from './hotel'

import './styles/hotelcontainer.css'

const HotelContainer = () => {
  return (
    <div className='hotel-container'>
      <Hotel
        image="hotel1.jpg"
        hotelname="Siam Hotel"
        pricing="$ 98"
        place="pattaya"
        rating="8.3"
      />
      <Hotel
        image="hotel2.jpg"
        hotelname="Siam Hotel"
        pricing="$ 98"
        place="pattaya"
        rating="8.3"
      />
      <Hotel
        image="hotel3.jpg"
        hotelname="Siam Hotel"
        pricing="$ 98"
        place="pattaya"
        rating="8.3"
      />
      <Hotel
        image="hotel4.jpg"
        hotelname="Siam Hotel"
        pricing="$ 98"
        place="pattaya"
        rating="8.3"
      />
      <Hotel
        image="hotel5.jpg"
        hotelname="Siam Hotel"
        pricing="$ 98"
        place="pattaya"
        rating="8.3"
      />
    </div>
  )
}

export default HotelContainer