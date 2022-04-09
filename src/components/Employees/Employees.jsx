import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../../redux/action';

const Employees = () => {
    const [all , setAll] = useState([])
    let dispatch = useDispatch()
    let navigate = useNavigate();
   const allusers =  useSelector((state)=>state.allusers);

   
   useEffect(()=>{
    
   },[])
   const handleemp = (id)=>{
    navigate(`/employee/${id}`)
   }

  return (
    <div>
        {all.map((user)=>{ 
           <div onClick={()=>handleemp(user.id)} >
            {console.log(user)}
            <h1>{user.name}</h1>
            <h1>{user.age}</h1>
            <h1>{user.gender}</h1>
            <h1>{user.mobile}</h1>
            <h1>{user.salary}</h1>
            <h1>{user.department}</h1>
           </div>
        })}
    </div>
  )
}

export default Employees