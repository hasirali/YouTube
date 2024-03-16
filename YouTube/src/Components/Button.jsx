import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='px-3 py-1 mx-2 bg-gray-100  w-auto rounded-lg'>{name}</button>
    </div>
  )
}

export default Button
