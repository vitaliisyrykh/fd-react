"use strict";



class Heading extends React.Component {
  render() {
    const {title}= this.props;
    return React.createElement("h1", { title:title }, "hello react.js");
  }
};
const reactElement = React.createElement(Heading,{title:'bye bye'})
ReactDOM.render(reactElement, document.getElementById("root"));
