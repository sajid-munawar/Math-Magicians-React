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
    return (
      <div>
        <ul className="container">
          <li className="item1"><button type="button" onClick={this.handleClick}>0</button></li>
          <li className="item2"><button type="button" onClick={this.handleClick}>AC</button></li>
          <li className="item3"><button type="button" onClick={this.handleClick}>+/-</button></li>
          <li className="item4"><button type="button" onClick={this.handleClick}>%</button></li>
          <li className="item5 y-bg"><button type="button" onClick={this.handleClick}>÷</button></li>
          <li className="item6"><button type="button" onClick={this.handleClick}>7</button></li>
          <li className="item7"><button type="button" onClick={this.handleClick}>8</button></li>
          <li className="item8"><button type="button" onClick={this.handleClick}>9</button></li>
          <li className="item9 y-bg"><button type="button" onClick={this.handleClick}>x</button></li>
          <li className="item10"><button type="button" onClick={this.handleClick}>4</button></li>
          <li className="item11"><button type="button" onClick={this.handleClick}>5</button></li>
          <li className="item12"><button type="button" onClick={this.handleClick}>6</button></li>
          <li className="item13 y-bg"><button type="button" onClick={this.handleClick}>-</button></li>
          <li className="item14"><button type="button" onClick={this.handleClick}>1</button></li>
          <li className="item15"><button type="button" onClick={this.handleClick}>2</button></li>
          <li className="item16"><button type="button" onClick={this.handleClick}>3</button></li>
          <li className="item17 y-bg"><button type="button" onClick={this.handleClick}>+</button></li>
          <li className="item18"><button type="button" onClick={this.handleClick}>0</button></li>
          <li className="item19"><button type="button" onClick={this.handleClick}>.</button></li>
          <li className="item20 y-bg"><button type="button" onClick={this.handleClick}>=</button></li>
        </ul>
      </div>
    );
  }
}
export default Calculator;
