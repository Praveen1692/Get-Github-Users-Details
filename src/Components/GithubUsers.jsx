import { Button } from '@material-ui/core';
import axios from 'axios';
import { useState } from 'react';
import './components.css';
import UserCard from './UserCard';


function GithubUsers(){

    const[userData,setUserData]=useState({});
    const[name,setName]=useState('');




    const getUserInfo=()=>{
        axios.get(`https://api.github.com/users/${name}`)
        .then((response)=>{
           setUserData(response.data)
        })
    }
    return( 
        <div className='github-wrapper'>
        
        <h1>Get Github Users Details</h1>

        <input className='username-input' placeholder='Enter Your Name...' onChange={(e)=>setName(e.target.value)} />
        <br /> 

        <button onClick={getUserInfo} className='btn'>Get Info</button>
        <br/>  <br />

        <UserCard userData={userData} />
        
        </div>
    )

}



export default GithubUsers;