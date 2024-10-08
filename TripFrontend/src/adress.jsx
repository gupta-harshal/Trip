import React, { useState } from 'react';
import './styles/adress.css';
import Hotel from './hotel';
import { IoSearch } from "react-icons/io5";
import axios from 'axios'; // Import axios


const HotelContainer = ({ hotels, loading, error, cityCode }) => {
  if (loading) {
    return <div>Loading hotels...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="hotel-reccomendation">
      <h3 className="hotel-text" style={{ color: "white" }}>
        We have found hotels for you to stay
      </h3>
      <div className='hotel-container'>
        {hotels.length > 0 ? (
          hotels.slice(0, 5).map((hotel, index) => (
            <Hotel
              key={index}
              image={hotel.image || 'hotel1.jpg'}
              hotelname={hotel.name.slice(0,10)}
              pricing="$ 98"
              place={cityCode} 
              rating="8.6"
              iataCode={hotel.iataCode}
            />
          ))
        ) : (
          <div>No hotels available</div>
        )}
      </div>
    </div>
  );
};

const Address = () => {
  const [cityCode, setCityCode] = useState("");
  const [hotels, setHotels] = useState([]); // For storing hotel data
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchHotels = async () => {
    if (!cityCode) {
      setError('Please enter a valid city code');
      return;
    }
    setLoading(true);
    setError(null); // Clear any previous errors
    try {
      const response = await axios.get(
        `https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-city?cityCode=${cityCode}&radius=1`,
        {
          headers: {
            Authorization: 'Bearer a7PitU6r0bAPemmCgo2ZOHjPyfWr', // Secure this token
          },
        }
      );
      const hotelData = response.data.data || [];
      const hotelsWithIata = hotelData.map(hotel => ({
        ...hotel,
        iataCode: hotel.geoCode?.iataCode || '',
      }));
      setHotels(hotelsWithIata);
    } catch (err) {
      setError('Failed to fetch hotels');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="address">
      <div className="address-container">
        <div className="address-div">
          <div className="address-icon">
            <div className="address-button-symbol">
              <div className="address-symbol"></div>
            </div>
          </div>
          <div className="address-destination">
            <div className="address-text-wrapper">Going to</div>
            <input
              className="address-text-wrapper-2"
              onChange={(e) => setCityCode(e.target.value)} // Directly updating state
              placeholder="Enter city code (e.g., NYC)"
            />
          </div>
        </div>
        {/* Other input fields for Date, Passenger, Room */}
        <button className='containerS' onClick={fetchHotels}>
          Search <IoSearch />
        </button>
      </div>
      {/* Render HotelContainer and pass hotels, loading, error, and cityCode as props */}
      <HotelContainer hotels={hotels} loading={loading} error={error} cityCode={cityCode} />
    </div>
  );
};

export default Address;
