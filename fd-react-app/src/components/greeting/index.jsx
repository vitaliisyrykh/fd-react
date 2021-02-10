import {Component} from 'react';

class Greeting extends Component {
  render(){
    const {name, photo, textContent} = this.props;
    return (
      <div className='GreetingElement'>
        <h1 className='heading'> hello {name} {textContent}</h1>
        <img src={photo} alt={name}/>
      </div>
    )
  }
};

export default Greeting;