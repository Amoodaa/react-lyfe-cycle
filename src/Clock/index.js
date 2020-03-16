import React, { Component } from "react";

export default class Clock extends Component {
  constructor(props) {
    super(props);
    // Setting the initial state
    this.state = {
      time: new Date()
    };
  }

  render() {
    const { time } = this.state;
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {time.toLocaleTimeString()} right now.</h2>
      </div>
    );
  }
}
