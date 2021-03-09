import React from 'react';
import styles from './newMenu.module.scss';
import cx from 'classnames';



const Menu = props => {

const {isOpen} = props;

const classNames = cx ({[styles.containerMenu]:isOpen,[styles.open]:!isOpen})


  return(
    <nav className={classNames}>
      
        <a href="#">about</a>
        <a href="#">home</a>
        <a href="#">contacts</a>
        <a href="#">some else</a>
        <a href="#">some other</a>
      
    </nav>
  )
}
export default Menu;