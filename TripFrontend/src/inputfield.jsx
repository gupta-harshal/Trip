import React from 'react'
import './styles/signupform.css'

const Inputfield = (props) => {
  return (
    <div>
      <div className="inputfield">
        <label htmlFor={props.name}>{props.label}</label>
        <input type={props.type} name={props.name}/>
      </div>
    </div>
  )
}

export default Inputfield;