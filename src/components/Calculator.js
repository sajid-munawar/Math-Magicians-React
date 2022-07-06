import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <ul className="container">
          <li className="item1">0</li>
          <li className="item2">AC</li>
          <li className="item3">+/-</li>
          <li className="item4">%</li>
          <li className="item5 y-bg">/</li>
          <li className="item6">7</li>
          <li className="item7">8</li>
          <li className="item8">9</li>
          <li className="item9 y-bg">x</li>
          <li className="item10">4</li>
          <li className="item11">5</li>
          <li className="item12">6</li>
          <li className="item13 y-bg">-</li>
          <li className="item14">1</li>
          <li className="item15">2</li>
          <li className="item16">3</li>
          <li className="item17 y-bg">+</li>
          <li className="item18">0</li>
          <li className="item19">.</li>
          <li className="item20 y-bg">=</li>
        </ul>
      </div>
    );
  }
}
export default Calculator;
