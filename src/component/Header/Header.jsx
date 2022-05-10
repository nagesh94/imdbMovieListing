import React, { useState } from 'react';
import useStyles from './Header.js'
import {Typography,Avatar, TextField, Button} from '@material-ui/core'
import user from '../../images/user.png'
import { Link } from 'react-router-dom';
import {} from '@material-ui/icons'
import { useDispatch } from 'react-redux';
import { fetchMovie } from '../../features/movies/movieSlice.js';
function Header() {

  const [search,setSearch]=useState()
  const classes=useStyles()
  const dispatch=useDispatch()
  function apiCall(){
   dispatch(fetchMovie(search))
   console.log(search)
  }
  return <div className={classes.main}>
    <div className={classes.title}>
    <Link to="/" className={classes.link}><Typography variant='h5'>Movie app</Typography> </Link>
    </div>
    <div className='input'>
      <label htmlFor="search">search</label>
    <input type="text" id="search" value={search} onChange={(event)=>{setSearch(event.target.value)}} />
    <Link to='/'><Button variant="contained" onClick={apiCall} >Contained</Button></Link>
    
    </div>
    <Avatar src={user}/>
  </div>;
}

export default Header;
