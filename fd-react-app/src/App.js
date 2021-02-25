import React from 'react';
import './App.css';
//import UserList from './components/user-list';
//import StopWatch from './components/stop-watch/index';
//import WindowResize from './components/window-resize';
//import Browse from './components/browse';
//import Counter from './components/counter';
import {User} from './components/contexts';
import UserPage from './components/user-page'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user:{
        name:'John',
        lastName:'Snow',
        img:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fcactusthemes.com%2Fblog%2Fwp-content%2Fuploads%2F2018%2F01%2Ftt_avatar_small.jpg&imgrefurl=https%3A%2F%2Fcactusthemes.com%2Fblog%2Fcan-users-set-avatar-wordpress%2F&tbnid=v0LChz2r9c60oM&vet=12ahUKEwjVj4_AjYXvAhWLzyoKHXS2CVYQMygAegUIARCsAQ..i&docid=PrQk7NwjDwvIcM&w=708&h=708&q=user%20avatar&ved=2ahUKEwjVj4_AjYXvAhWLzyoKHXS2CVYQMygAegUIARCsAQ"
      }
    }
  }

  
  render () {
    return (
      <>
        <User.Provider value={this.state.user}>
          <UserPage/>
        </User.Provider>
      </>
    );
  }
}

export default App;
