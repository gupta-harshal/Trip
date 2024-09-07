import React from 'react'

const Inputfield = (props) => {
  return (
    <div>
      <div className={props.classname}>
        <label htmlFor={props.name}>{props.label}</label>
        <input type={props.type} name={props.name}/>
      </div>
    </div>
  )
}

export default Inputfield;