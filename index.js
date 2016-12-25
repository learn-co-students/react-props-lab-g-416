const React = require('react');
const ReactDOM = require('react-dom');

const Spaceship = require('./components/Spaceship');

const name={name: "Millennium Falcon"}





ReactDOM.render(
  <Spaceship
  name= "Millennium Falcon"
  speed=500/>,

  document.getElementById('main')
);

require('./test/index-test.js'); // Leave this in!
//
