import React,{useContext} from 'react';
import cx from 'classnames';
import {switchThems} from '../contexts/index';
import styles from './switch-thems.module.scss'; 


const SomePage = props => {
  const [isWhite, setIsWhite] = useContext(switchThems);

const classNames = cx({
  [styles.whiteThem]: isWhite,
  [styles.blackThem]: !isWhite
}
);
  
  return (
    <div className={classNames}>
      <h1>Some Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam expedita
        sit, quis pariatur voluptatibus libero id repellendus quaerat fuga
        veritatis fugit minima, quisquam harum nesciunt aperiam itaque fugiat!
        Enim, veritatis.
      </p>
    </div>
  );
};

export default SomePage;
