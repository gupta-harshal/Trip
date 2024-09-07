import Hotel2 from './hotel2'
import React from 'react'


import './styles/hotelcontainer.css'

const HotelContainer2 = () => {
  return (
    <div className='hotel-container'>
      <Hotel2
        image="hotel21.jpg"
        hotelname="Siam Hotel"
        pricing="$ 98"
        place="pattaya"
        rating="8.3"
      />
      <Hotel2
        image="hotel22.jpg"
        hotelname="Siam Hotel"
        pricing="$ 98"
        place="pattaya"
        rating="8.3"
      />
      <Hotel2
        image="hotel23.jpg"
        hotelname="Siam Hotel"
        pricing="$ 98"
        place="pattaya"
        rating="8.3"
      />
      <Hotel2
        image="hotel24.jpg"
        hotelname="Siam Hotel"
        pricing="$ 98"
        place="pattaya"
        rating="8.3"
      />
      
    </div>
  )
}

export default HotelContainer2;