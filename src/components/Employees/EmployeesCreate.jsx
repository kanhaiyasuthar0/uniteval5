import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser, login } from '../../redux/action';

const EmployeesCreate = () => {
    let dispatch = useDispatch()
    let navigate = useNavigate();
    const [user, setUser] = useState({
        name:"",
        email:"",
        password:"",
        username:"",
        mobile:"",
        description:"",
    });
    const handleChange = (e)=>{
        const {name, value} = e.target;
        // console.log(name,value);
       setUser({
           ...user,
           [name]:value
       })
  
       
    }
    const handleSubmit = ()=>{
        getData()
    }

    const getData = async ()=>{
        console.log(user);
        try {
            
            let res1 = await fetch(`https://masai-api-mocker.herokuapp.com/auth/register`, {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(user)
                
            });
            let res2 = await res1.json();
            dispatch(addUser(user));
            navigate("/login")
        } catch (error) {
            console.log(error);
        }
        

    }
  return (
    <div>
        <input placeholder='name' name='name' onChange={handleChange}  type="text" />
        <input placeholder='email' name='email' onChange={handleChange}  type="text" />
        <input placeholder='password' name='password' onChange={handleChange}  type="text" />
        <input placeholder='username' name='username' onChange={handleChange}  type="text" />
        <input placeholder='mobile' name='mobile' onChange={handleChange}  type="text" />
        <input placeholder='description' name='description' onChange={handleChange}  type="text" />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default EmployeesCreate