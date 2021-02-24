import { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
  constructor (props) {
    super(props);
    this.state = {
      count: 0,
      isAdd: true
    };
  }

  handleAdd = () => {
    this.setState((state, props) => {
      return { count: state.count + props.step };
    });
  };

  changeMode = () => {
    this.setState({
      isAdd: !this.state.isAdd
    });
  };
  handleRemove = () => {
    this.setState((state, props) => {
      if (state.count <= 0) {
        state.count = 0;
      } else {
        return { count: state.count - props.step };
      }
    });
  };
  shouldComponentUpdate ( nextProps) {
    if(nextProps.step !== this.props.step) {
      return false;
    }return true;
    
  }
  render () {
    const { count, isAdd } = this.state;
    const { step } = this.props;
    console.log(step);
    console.log(count);
    return (
      <div>
        <div>Count:{count}</div>
        
        <button onClick={isAdd ? this.handleAdd : this.handleRemove}>
          {isAdd ? 'Add' : 'Remove'}
        </button>
        <button onClick={this.changeMode}>Change Mode</button>
      </div>
    );
  }
}
Counter.propTypes = {
  step: PropTypes.number.isRequired
};

export default Counter;
