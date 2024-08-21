import React, {useContext} from 'react'
import Usercontext from '../Context/useContext'

function Profile() {
  const {user} = useContext(Usercontext)

  if(!user) return <div>Please Login</div>

  return <div>Welcome {user.username}</div>
}

export default Profile
