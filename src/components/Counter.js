import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.onIncrease = this.onIncrease.bind(this);
    this.onDecrease = this.onDecrease.bind(this);

    this.state = {
      number: 0,
      secondVar: "Hello",
    };
  }

  onIncrease() {
    this.setState((prevState) => ({
      number: prevState.number + 1,
      secondVar: (prevState.secondVar = "A"),
    }));
  }

  onDecrease() {
    this.setState((prevState) => ({
      number: prevState.number - 1,
      secondVar: (prevState.secondVar = "F"),
    }));
  }

  render() {
    return (
      <div>
        <span>{this.props.index}</span>
        <button onClick={this.onIncrease}>+</button>
        <span>
          {this.state.number}
          {/* {this.state.secondVar}
          {this.props.name} */}
        </span>
        <button onClick={this.onDecrease}>-</button>
      </div>
    );
  }
}
