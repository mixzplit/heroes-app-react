import React from 'react'

export const Alert = (props) => {
  return (
    <div className={`alert ${props.type}`} style={props.style}  >{props.message} </div>
  )
}
