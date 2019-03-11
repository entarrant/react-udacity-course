import React, { Component } from "react";

class Game extends Component {
  constructor(props) {
    super(props);

    const question = this.generateQuestion();
    this.state = {
      value1: question[0],
      value2: question[1],
      value3: question[2],
      proposedAnswer: question[3]
    };
  }

  render() {
    const { value1, value2, value3, proposedAnswer } = this.state;
    const realAnswer = value1 + value2 + value3;

    return (
      <div>
        <div className="equation">
          <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
        </div>
        <button onClick={() => this.checkAnswer("correct", realAnswer)}>
          True
        </button>
        <button onClick={() => this.checkAnswer("incorrect", realAnswer)}>
          False
        </button>
      </div>
    );
  }

  checkAnswer = (userGuess, realAnswer) => {
    let userCorrect;

    if (userGuess === "correct" && realAnswer === this.state.proposedAnswer) {
      userCorrect = true;
    } else if (
      userGuess === "incorrect" &&
      realAnswer !== this.state.proposedAnswer
    ) {
      userCorrect = true;
    } else {
      userCorrect = false;
    }
    this.props.updateStats(userCorrect);
    this.updateQuestion();
  };

  updateQuestion = () => {
    const newQuestion = this.generateQuestion();

    this.setState({
      value1: newQuestion[0],
      value2: newQuestion[1],
      value3: newQuestion[2],
      proposedAnswer: newQuestion[3]
    });
  };

  generateQuestion = () => {
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer =
      Math.floor(Math.random() * 3) + (value1 + value2 + value3);
    return [value1, value2, value3, proposedAnswer];
  };
}

export default Game;
