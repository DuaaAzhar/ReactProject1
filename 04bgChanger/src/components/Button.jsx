import React from 'react'

const Button = ({color, text, setColor}) => {
  return (
      <button style={{backgroundColor: color, color: text}} onClick={()=>{setColor(color)}}
          className='px-6 py-1 rounded-full text-white shadow-lg'>
            {color}
      </button>
   
  )
}

export default Button
