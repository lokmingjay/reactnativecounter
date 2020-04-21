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
    };
    this.initArray = this.initArray.bind(this);
    //   can ignore as this is not used
  }

  onChange(event) {
    console.log(event.type);
    const value = event.target.value;
    this.setState({
      size: value.length > 0 ? parseInt(value) : 0,
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
        <form>
          <input onChange={this.onChange} type="text" value={this.state.size} />
        </form>
        {counters.map((value,index) => (
          <Counter key={value} index = {index} />
        ))}
      </div>
    );
  }
}
