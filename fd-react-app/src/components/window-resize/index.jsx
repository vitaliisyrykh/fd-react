import { Component } from 'react';

class WindowResize extends Component {
  constructor (props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
  setResize = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  componentDidMount () {
    window.addEventListener('resize', this.setResize);
  }
  componentDidUpdate () {
    
  }
  componentWillUnmount () {
    window.removeEventListener('resize');
  }
  render () {
    const { width, height } = this.state;
    return (
      <section>
        <h1>Current Window size</h1>
        <h3>x-{width}</h3>
        <h3>y-{height}</h3>
      </section>
    );
  }
}
export default WindowResize;
