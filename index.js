const React = require('react');
const ReactDOM = require('react-dom');

const Spaceship = require('./components/Spaceship');

const shipColors = ['red', 'black', 'gun metal', 'yellow', 'orange'];

ReactDOM.render(
  <Spaceship 
    name="Millennium Falcon"
    speed={150000}
    hasRockets={true}
    colors={shipColors} 
  />,
  document.getElementById('main')
);

require('./test/index-test.js'); // Leave this in!
