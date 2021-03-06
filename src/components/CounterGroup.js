import React, { Component } from "react";
import PropTypes from "prop-types";
import Counter from "./Counter";
import { INIT_COUNTERS_SIZE } from "../constants/constants";

export default class CounterGroup extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.state = {
      size: INIT_COUNTERS_SIZE,
      sum: 0,
    };
    this.initArray = this.initArray.bind(this);
    this.onCalculate = this.onCalculate.bind(this);

    //   can ignore as this is not used
  }

  onCalculate(change) {
    this.setState((prevState) => ({
     
      sum: prevState.sum + change,
    }));
    console.log(change);
  }

  onDecrease() {
    this.setState((prevState) => ({
      number: prevState.number - 1,
      secondVar: (prevState.secondVar = "F"),
    }));
  }

  onChange(event) {
    console.log(event.type);
    const value = event.target.value;
    this.setState({
      size: value.length > 0 ? parseInt(value) : 0,
      sum : 0 ,
    });
  }

  initArray(size) {
    const array = Array.from(Array(size).keys());
    console.log(array);
    return array;
  }

  render() {
    const size = this.state.size;
    let counters = this.initArray(size);
    return (
      <div>
      <p>
        sum of all counters value is <mark>{this.state.sum}</mark>
      </p>
        <form>
          Generate <input onChange={this.onChange} type="text" value={this.state.size} /> Counter(s)
        </form>
        {counters.map((value, index) => (
          <Counter 
          key={value} 
          index={index}
          number ={this.state.size}
          onCalculate={this.onCalculate} />
        ))}
      </div>
    );
  }
}
