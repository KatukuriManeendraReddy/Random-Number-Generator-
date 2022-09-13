import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    randomNumber: 0,
  }

  generateNumber = () => {
    this.setState(prevState => ({randomNumber: Math.ceil(Math.random() * 100)}))
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="heading">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="button"
            type="button"
            onClick={this.generateNumber}
          >
            Generate
          </button>
          <p className="para">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
