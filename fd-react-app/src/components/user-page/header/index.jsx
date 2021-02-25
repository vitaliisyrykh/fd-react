import React from "react";
import {User} from "../../contexts"
import styles from "./header.module.scss";


const Header = props =>{
  return(
    <User.Consumer>
      {value=>{
        return(
          <div className={styles.header}>
            <h1>{value.name}{value.lastName}</h1>
            <img alt="userAvatar" src={value.img}/>
          </div>
        )
      }}
    </User.Consumer>
  )
}
export default Header;