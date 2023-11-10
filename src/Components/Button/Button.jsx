import React from 'react'
import './Button.scss'

export default function Button({children, colour, backgroundColor, onClick}) {
  return (
    <div>
      <button className='button-component' style={{backgroundColor: backgroundColor , color: colour }} onClick={onClick}>{children}</button>
    </div>
  )
}
