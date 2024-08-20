import React from 'react'
import { useParams } from 'react-router-dom'

function user() {
    const {userId} = useParams()
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'> User : {userId}</div>
  )
}

export default user
