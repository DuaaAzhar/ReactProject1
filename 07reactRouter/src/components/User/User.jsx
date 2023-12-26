import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    const {userId} = useParams();
    return (
    <div className='text-center bg-gray-700 text-white text-3xl px-3 py-3'>
      User: {userId.toUpperCase()}
    </div>
  )
}

export default User
