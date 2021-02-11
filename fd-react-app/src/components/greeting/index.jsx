import {Component} from 'react';

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGreeting:true,
    }
  }
  switch(){
    const{isGreeting} = this.state;
    this.setState({isGreeting: !isGreeting});
  }
  
  
  render(){
    
    const {name, children} = this.props;
    return (
      <div className='GreetingElement'>
        <h1 className='heading' onClick={this.switch}> hello {name}</h1>
        {children}
      </div>
    )
  }
};

export default Greeting;