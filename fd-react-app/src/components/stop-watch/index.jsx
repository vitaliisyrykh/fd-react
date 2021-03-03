//import React, { Component } from 'react';

 class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.intervalId = null;
    this.state = {
      time: new Date(0, 0, 0, 0, 0, 0, 0),
      isRunning : false ,
    }
  };
   tick = () => {
    const { time } = this.state;
    time.setSeconds(time.getSeconds() + 1);
    this.setState({ time });
  }; 
   start = () => {
      this.intervalId = setTimeout(this.tick, 1000);
  };
  stop = () => {
    clearTimeout(this.intervalId);
    this.intervalId = null;
  };
   reset = () => {
    this.stop();
    this.setState({ time: new Date(0, 0, 0, 0, 0, 0, 0) });
  }; 
   componentDidMount() {
    this.start();
  }
   componentDidUpdate() {
    this.start()
  } 
   componentWillUnmount() {
    this.stop();
  } 

   render() {
    const { time } = this.state;
    return (
      <article>
        <h1>{time.toLocaleTimeString('it-IT')}</h1>
        <button
          onClick={() => {
            this.start();
          }}
        >
          START
        </button>
        <button
          onClick={() => {
            this.stop();
          }}
        >
          STOP
        </button>
        <button
          onClick={() => {
            this.reset();
          }}
        >
          RESET
        </button>
      </article>
    );
  } 
}

//export default StopWatch;