'use strict';

const root = document.getElementById('root');
const reactElement = React.createElement('h1',{title: 'hello'}, 'hello react.js');

ReactDOM.render(reactElement, root);