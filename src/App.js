import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import Timer from './Timer'
import Buttons from './Buttons'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      intervalId: null,
      time: 0
    }
    this.setTimer = this.setTimer.bind(this)
  }

  setTimer(time = 0) {
    clearInterval(this.state.intervalId)
    let intervalId = setInterval(() => {
      let time = this.state.time - 1
      if (time === 0) { clearInterval(intervalId) }
      this.setState({
        time
      })
    }, 1000)

    return this.setState({
      intervalId,
      time
    })
  }

  render() {
    return (
      <div className='App'>
        <h2>React Timer</h2>
        <div className='App-intro'>
          <Buttons handleClick={this.setTimer} />
        </div>
        <Timer time={this.state.time} />
      </div>
    )
  }
}

export default App
