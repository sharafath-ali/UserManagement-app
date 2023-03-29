import React from 'react'
import './Product.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
function Product({keys,fn,ln,email,des}) {
  return (
    
  <div className="card">
    <h1>{fn} {ln}</h1>
    <p className="title">{email}</p>
    <br/>
    <p>{des}</p>
    <br/>
    <p>{keys}</p>
  </div>
  )
}

export default Product