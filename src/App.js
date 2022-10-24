import "./styles.css";
import React, { Component } from "react";
import Panter from "../src/img/panter.jpg";

class Calculadora extends Component {
  state = {
    n1: "",
    n2: "",
    res: ""
  };

  handleChange1 = (e) => {
    this.setState({
      n1: Number(e.target.value)
    });
  };

  handleChange2 = (e) => {
    this.setState({
      n2: Number(e.target.value)
    });
  };

  div = () => {
    const { n1, n2 } = this.state;
    if (n1 && n2 !== "") {
      this.setState({
        res: n1 / n2
      });
    } else {
      this.setState({
        res: "no value."
      });
    }
  };

  mult = () => {
    const { n1, n2 } = this.state;
    if (n1 && n2 !== "") {
      this.setState({
        res: n1 * n2
      });
    } else {
      this.setState({
        res: "no value."
      });
    }
  };

  sub = () => {
    const { n1, n2 } = this.state;
    if (n1 && n2 !== "") {
      this.setState({
        res: n1 - n2
      });
    } else {
      this.setState({
        res: "no value."
      });
    }
  };

  som = () => {
    const { n1, n2 } = this.state;
    if (n1 && n2 !== "") {
      this.setState({
        res: n1 + n2
      });
    } else {
      this.setState({
        res: "no value."
      });
    }
  };

  clear = () => {
    const { n1, n2 } = this.state;
    if (n1 && n2 !== "") {
      this.setState({
        res: null,
        n1: 0,
        n2: 0
      });
    } else {
      this.setState({
        res: "no value."
      });
    }
  };

  render() {
    return (
      <div className="principal">
        <div className="main">
          <h1>The Pink Panter</h1>
          <h2>{this.state.res}</h2>
          <input
            value={this.state.n1}
            type="number"
            onChange={this.handleChange1}
          />
          <input
            value={this.state.n2}
            type="number"
            onChange={this.handleChange2}
          />
          <div className="buttons">
            <button onClick={this.div}> / </button>
            <button onClick={this.mult}> * </button>
            <button onClick={this.sub}> - </button>
            <button onClick={this.som}>+</button>
            <button onClick={this.clear}>🧹</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculadora;
