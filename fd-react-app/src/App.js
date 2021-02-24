import React from 'react';
import './App.css';
//import UserList from './components/user-list';
//import StopWatch from './components/stop-watch/index';
//import WindowResize from './components/window-resize';
//import Browse from './components/browse';
import Counter from './components/counter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step:0,
    }
  }

  handleChange=(e)=>{
    this.setState({step:Number(e.target.value)})
  }
  render () {
    return (
      <>
        <input type='range' onChange={this.handleChange} value={this.state.step}></input> 
        <div>{this.state.step}</div>
        <Counter step={this.state.step}/>
      </>
    );
  }
}

export default App;
