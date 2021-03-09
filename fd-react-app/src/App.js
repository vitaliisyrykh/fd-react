import React, {useState} from 'react';
import './App.css';
//import UserList from './components/user-list';
//import StopWatch from './components/stop-watch/index';
//import WindowResize from './components/window-resize';
//import Browse from './components/browse';
//import Counter from './components/counter';
//import {User} from './components/contexts';
//import UserPage from './components/user-page';
//import StopWatchHooks from './components/stop-watch-hooks';
//import {switchThems} from './components/contexts';
//import SomePage from './components/switch-thems';
import Menu from './components/newMenu';
import styles from './components/newMenu/newMenu.module.scss';

const App = props => {
  const [isOpen,setIsOpen] = useState(true);
  const handleClickMenu = () => {
    setIsOpen(!isOpen);
  }
  
  
    return (
      
        <div>
          <Menu isOpen={isOpen}/>
          <button onClick={handleClickMenu} className={styles.forBtn}>{isOpen ?'Open Menu':'Close menu' }</button>
        </div>
      
    );
  
}

export default App;
