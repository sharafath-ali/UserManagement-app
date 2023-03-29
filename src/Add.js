import { Email } from '@mui/icons-material'
import React from 'react'
import './Add.css'
import { useState } from 'react';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from './context/context'
function Add() {
  const {users,setusers}=useContext(UserContext)
  function save(){
    setusers([...users,{first_name:fn,last_name:ln,email:email}])
    navigate('/');
  }
  const [email, setemail] = useState('')
  const [des, setdes] = useState('')
  const [fn,setfn]=useState('')
  const [ln,setln]=useState('')
  const navigate = useNavigate();
  
  function handleClick() {
    navigate('/');
  }

  return (
  <div className='container'>
    <IconButton onClick={handleClick} ><ArrowBackIcon/>BACK</IconButton>
    
    <label for="uname"><b>Firstname</b></label>
    <input type="text" placeholder="Firstname" name="uname"  onChange={(e)=>setfn(e.target.value)} required/>

    <label for="psw"><b>Lastname</b></label>
    <input type='text' placeholder="Lastname" name="psw"  onChange={(e)=>setln(e.target.value)} required/>
    
    <label for="Email"><b>Email</b></label>
    <input type='email' placeholder="Email" name="Email" onChange={(e)=>setemail(e.target.value)} required/>
    <label for="designation"><b>designation</b></label>
    <input type='email' placeholder="Email" name="designation" onChange={(e)=>setdes(e.target.value)} required/>

    <button type="submit" onClick={save}>Save info</button>
    
  </div>
  )
}

export default Add