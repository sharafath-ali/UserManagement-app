import React from 'react'
import './Section.css'
import { useContext } from 'react';
import { SContext } from './context/searchcontext';
import { useNavigate } from "react-router-dom";
function Section() {
  const {filter,setfilter}=useContext(SContext)
  const navigate = useNavigate();
  function handleClick() {
    navigate('/add');
  }
  return (
    <div className='section'>
        <div className="search">
            <input className="searchInput" type="text" placeholder="Search for ..." value={filter} onChange={(e)=>setfilter(e.target.value.toLowerCase())}/>
        </div>
        <button className='button' onClick={()=>{navigate('/add')}}>Add User</button>
    </div>
  )
}

export default Section