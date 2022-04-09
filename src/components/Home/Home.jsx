import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
    const user = useSelector((state)=>state.user);
   
  return (
      <>
    <div>Hello {user.username}</div>
    <p>Your password is : {user.password}</p>
      </>
  )
}

export default Home