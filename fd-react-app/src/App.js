import React from 'react';
import './App.css';
import Greeting from './components/greeting';


class App extends React.Component{
  render() {
    const user ={
      name: 'John',
      photo: 'http://localhost:3000/favicon.ico',
    }
    return (
      <div className="App">
        <Greeting name={user.name} photo={user.photo}/>
        <Greeting name={user.name} textContent='aloha guys'/>
      </div>
    );
  }
}

export default App;
