import React from 'react'

function UserCard(props)  {
  if(Object.keys(props.userData).length<1){
    return <h3>Enter User Name..</h3>
  }
  return (
    <div className='user-wrapper'>


    
     <img src={props.userData.avatar_url} />
     <br />
     <h3>{props.userData.name}</h3>
     <p>Blog Link:<a href={props.userData.blog}>{props.userData.blog}</a></p>
     <p>Location: <b>{props.userData.location}</b> </p>
     <p>Public Rep. : <b>{props.userData.public_repos}</b> </p>
      
      
    </div>
  )
}

export default UserCard