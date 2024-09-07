import React from 'react'
import './styles/adress.css'

const Addressbar = (props) => {
  return (
    
      <div className="address-div">
        <div className="address-icon">
          <div className="address-button-symbol">
            <div className="address-symbol"></div>
          </div>
        </div>
        <div className="address-destination">
          <div className="address-text-wrapper">{props.activity}</div>
          <input className="address-text-wrapper-2"></input>
        </div>
      </div>

  )
}

export default Addressbar;




























































































































