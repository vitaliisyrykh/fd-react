import React from 'react';
import UserCard from './userCard'
const userDB = [
  {
    id: 1,
    fistName: 'John',
    lastName: 'Snow',
  },
  {
    id: 2,
    name: 'John',
    lastName: 'Snow',
  },
  {
    id: 3,
    fistName: 'John',
    lastName: 'Snow',
  },
  {
    id: 4,
    fistName: 'John',
    lastName: 'Snow',
  },

];

class UserList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: userDB.map((user)=>({...user, isSelected:false})),
    };
  };
  changeSelec = (user) =>{
    const {isSelected} =user;
      if(!user.isSelected){
          user.isSelected = !user.isSelected;
      }
  }
  mapUsers = (user) => {
    return (
    <UserCard 
      key={user.id} 
      user={user} 
      isSelected={user.isSelected} 
      changeSelec = {this.changeSelec}
    />
    );
  };

  render() {
    const { users } = this.state;
    return (
      <section>
        <h1>USER LIST FROM DB</h1>
        {users.map(this.mapUsers)}
      </section>
    );
  }
}
export default UserList;

