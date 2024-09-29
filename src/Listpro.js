import React from 'react'
import Product from './Product'
import Section from './Section'
import { useContext } from 'react';
import { UserContext } from './context/context'
import './Listing.css';
import { SContext } from './context/searchcontext';

function Listpro() {
    const {users}=useContext(UserContext)
    const {filter}=useContext(SContext)
  return (
    <>
    <Section />
    <p>{users[users.length-1].id}</p>
    <div className='Listing'>
     {
      users.filter((user)=>user.first_name.toLowerCase().includes(filter)).map((user,index)=>{
      return  <Product keys={index} fn={user.first_name} ln={user.last_name} email={user.email} des={user.department} />
      }) 
     }
    </div>
    </>
  )
} 

export default Listpro