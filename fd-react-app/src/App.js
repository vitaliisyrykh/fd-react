import React from 'react';
import './App.css';
import Aloha from './components/aloha-dashboard/index'


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
       users :[
        {
          id: 1,
          name: 'John',
          lastName: 'Snow',
        },
        {
          id: 2,
          name: 'John',
          lastName: 'Snow',
        },
        {
          id: 3,
          name: 'John',
          lastName: 'Snow',
        },
        {
          id: 4,
          name: 'John',
          lastName: 'Snow',
        },
  
      ],
    };
  };
  render() {
    const {users} = this.state;
    return (
      <>
        <Aloha users={users}/>
      </>
    )
  }
}

export default App;
