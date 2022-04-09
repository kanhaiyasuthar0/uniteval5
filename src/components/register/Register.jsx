import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../../redux/action';

const Register = () => {

    
    let dispatch = useDispatch()
    let navigate = useNavigate();
   //name, age, gender, contact number, image, department, salary
    const [user, setUser] = useState({
        name:"",
        age:"",
        gender:"",
        mobile:"",
        image:"",
        department:"",
        salary:""
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
        
        try {
            
            let res1 = await fetch(`http://localhost:3004/profile` , {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(user)
                
            }
            );
            let res2 = await res1.json();
            console.log(res2);
            let userd = {...res2}
            dispatch(addUser(userd));
            alert("Employee Created successfully")
          
        } catch (error) {
            console.log(error);
        }
    }
   //name, age, gender, contact number, image, department, salary
        
  return (
    <div>
        
        <input placeholder='name' name='name' onChange={handleChange}  type="text" />
        <input placeholder='age' name='age' onChange={handleChange}  type="text" />
        <input placeholder='gender' name='gender' onChange={handleChange}  type="text" />
        <input placeholder='image' name='image' onChange={handleChange}  type="text" />
        <input placeholder='mobile' name='mobile' onChange={handleChange}  type="text" />
        <input placeholder='department' name='department' onChange={handleChange}  type="text" />
        <button onClick={handleSubmit}>Submit</button>
        
    </div>
  )
}

export default Register