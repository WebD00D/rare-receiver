import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    const { chrome, cast } = window;
    cast.framework.CastReceiverContext.getInstance().start();
  }

  render() {
    return <cast-media-player />;
  }
}

export default App;
