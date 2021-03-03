import React, { useState, useEffect } from 'react';

const StopWatchHooks = props => {
  const [time, setTime] = useState( new Date(0, 0, 0, 0, 0, 0, 0) );
  const [isStart, setIsStart] = useState(true);
  let intervalId = null;

  const tick = () => {
   
    time.setSeconds(time.getSeconds() + 1);
    setTime({ time });
  };

  const start = () => {
    setIsStart(true);
    return (intervalId = setInterval(tick, 1000));
  };
  const stop = () => {
    setIsStart(false);
    clearInterval(intervalId);
    intervalId = null;
  };
  const reset = () => {
    stop();
    setTime({ time: new Date(0, 0, 0, 0, 0, 0, 0) });
  };

  useEffect(() => {
    document.getElementById('start/stop').addEventListener('click',isStart? stop:start);

    
  });
  
  return (
    <div>
      <h1>{time}</h1>
      <button id="start/stop">{isStart? 'stop':'start'}</button>
      <button>reset</button>
    </div>
  );
};
export default StopWatchHooks;
