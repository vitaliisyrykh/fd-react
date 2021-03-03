import React from 'react';
import {User} from '../../contexts'


const SideBar = props => {

  const sideBarRendering = value => {
    const {img, name, lastName} = value;
    console.log(img);
    return (
      <div>
          <img alt="userAvatar" src={img}/>
          <h2>{name}</h2>
          <h2>{lastName}</h2>
      </div>
    )
  }
  return(
    
    <User.Consumer>
      {sideBarRendering}
    </User.Consumer>  
    
  )
}

export default SideBar;