
// import react and react dom libraries
import React from 'react';
import ReactDOM from 'react-dom';

// create a react component
const App = function() {
  return <div>Hi There</div>
}



// Take react comp and show on screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
