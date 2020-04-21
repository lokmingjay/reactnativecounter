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

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.number !== this.props.number) {
      this.setState({number:0})

    } 
      else if (this.state.number > prevState.number  ) {
      this.props.onCalculate(1);
      console.log("no expected")
    } else if (this.state.number < prevState.number  ) {
      this.props.onCalculate(-1);
      console.log("NONONONONO" +this.state.number  +  prevState.number );
      console.log(prevProps.number+ " haha " +this.props.number )
    }
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
