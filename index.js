const React = require('react');
const ReactDOM = require('react-dom');

const Spaceship = require('./components/Spaceship');

// class Spaceship extends React.Component{
//   render(){
//     return();
//   }
// }


ReactDOM.render(
  <Spaceship name="Millennium Falcon" />,
  document.getElementById('main')
);

require('./test/index-test.js'); // Leave this in!
