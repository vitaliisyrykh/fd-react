"use strict";

class Heading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  increment = () => {
    this.setState({ counter: this.state.counter +1 });
  };

  decrement = () => {
    if(this.state.counter > 0){
    this.setState({ counter: this.state.counter -1  });
    }return;
  };

  render() {
    const { counter } = this.state;
    return React.createElement(
      React.Fragment,
      null,
      React.createElement("h1", null, counter),
      React.createElement(
        "button",
        {onClick: this.decrement},
        "-"),
        React.createElement("button", {onClick: this.increment}, "+")
      )
    
  }
}
const reactElement = React.createElement(Heading, { title: "bye bye" });
ReactDOM.render(reactElement, document.getElementById("root"));
