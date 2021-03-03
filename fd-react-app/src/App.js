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
import {switchThems} from './components/contexts';
import SomePage from './components/switch-thems';

const App = props => {
  const isWhite = useState(true);
  
  
    return (
      <switchThems.Provider value={isWhite}>
        <div>
          <SomePage/>
        </div>
      </switchThems.Provider>
    );
  
}

export default App;
