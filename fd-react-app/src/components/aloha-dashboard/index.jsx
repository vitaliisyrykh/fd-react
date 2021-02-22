import Greeting from '../greeting/index';
import { Component } from 'react';

class Aloha extends Component {
  mapAloha = user => {
    return (
      <li>
        <Greeting name={`${user.fistName} ${user.lastName}`} />
      </li>
    );
  };
  render () {
    const { users } = this.props;
    return <ul>{users.map(this.mapAloha)}</ul>;
  }
}
export default Aloha;
