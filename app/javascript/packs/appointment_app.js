import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from './Calendar';
import '../styles/appointment_app.scss';

class App extends React.Component {
  render() {
    return <Calendar/>
  }
}

document.addEventListener("DOMContentLoaded", e => {
  ReactDOM.render(<App name="React Vivens" />, document.body.appendChild(document.createElement('div')))
})