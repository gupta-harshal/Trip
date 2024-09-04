import React from 'react'
import './styles/button.css'

const Button = (props) => {
  return (
    <button className="buttonB">
      <div className="text-wrapperB">{props.place}</div>
    </button>
  )
}

export default Button