import { Button } from '@material-ui/core';
import axios from 'axios';
import { createRef, useEffect, useState } from 'react';
import './components.css';
import UserCard from './UserCard';


function GithubUsers(){

    const[userData,setUserData]=useState({});
    const[name,setName]=useState('');
    const inputRef=createRef();




    const getUserInfo=()=>{
        axios.get(`https://api.github.com/users/${name}`)
        .then((response)=>{
           setUserData(response.data)
        })
        .catch((error)=>{
            console.log(error.message);
        })
        inputRef.current.value='';
        setName('');
    }
    useEffect(()=>{
        inputRef.current.focus(); 

    },[]);
    return( 
        <div className='github-wrapper'>
        
        <h1>Get Github Users Details</h1>

        <input className='username-input' placeholder='Enter Your Name...' onChange={(e)=>setName(e.target.value)} ref={inputRef} />
        <br /> 

        <button onClick={getUserInfo} className='btn'>Get Info</button>
        <br/>  <br />

        <UserCard userData={userData} />
        
        </div>
    )

}



export default GithubUsers;
