import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { islogin, login } from '../../redux/action';

const Login = () => {
    const [user, setUser] = useState({
        username:"",
        password:""
    })
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (e)=>{
        const {name, value} = e.target;
       
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
            
            let res1 = await fetch(`https://masai-api-mocker.herokuapp.com/auth/login`, {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(user)
                
            });
            let res2 = await res1.json();
            console.log(res2);
            dispatch(login(user));
            dispatch(islogin(true));
            navigate("/home")
        } catch (error) {
            console.log(error);
        }
        

    }
  return (
    <div>
        
        <input placeholder='password' name='password' onChange={handleChange}  type="text" />
        <input placeholder='username' name='username' onChange={handleChange}  type="text" />

        <button onClick={handleSubmit}>Login</button>

    </div>
  )
}

export default Login