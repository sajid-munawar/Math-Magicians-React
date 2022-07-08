import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState((state) => calculate(state, event.target.textContent));
  }

  render() {
    const { next, total } = this.state;
    return (
      <div>
        <div className="container">
          <div className="item1">{next || total || 0}</div>
          <button type="button" onClick={this.handleClick} className="item2">AC</button>
          <button type="button" onClick={this.handleClick} className="item3">+/-</button>
          <button type="button" onClick={this.handleClick} className="item4">%</button>
          <button type="button" onClick={this.handleClick} className="item5 y-bg">÷</button>
          <button type="button" onClick={this.handleClick} className="item6">7</button>
          <button type="button" onClick={this.handleClick} className="item7">8</button>
          <button type="button" onClick={this.handleClick} className="item8">9</button>
          <button type="button" onClick={this.handleClick} className="item9 y-bg">x</button>
          <button type="button" onClick={this.handleClick} className="item10">4</button>
          <button type="button" onClick={this.handleClick} className="item11">5</button>
          <button type="button" onClick={this.handleClick} className="item12">6</button>
          <button type="button" onClick={this.handleClick} className="item13 y-bg">-</button>
          <button type="button" onClick={this.handleClick} className="item14">1</button>
          <button type="button" onClick={this.handleClick} className="item15">2</button>
          <button type="button" onClick={this.handleClick} className="item16">3</button>
          <button type="button" onClick={this.handleClick} className="item17 y-bg">+</button>
          <button type="button" onClick={this.handleClick} className="item18">0</button>
          <button type="button" onClick={this.handleClick} className="item19">.</button>
          <button type="button" onClick={this.handleClick} className="item20 y-bg">=</button>
        </div>
      </div>
    );
  }
}
export default Calculator;
