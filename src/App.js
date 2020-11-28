import React, { Component } from 'react'
import './App.scss'
import Home from './pages/Home'

class App extends Component {
  render() {
    return (
      <div className="app">
        <nav></nav>
        <Home />
        <footer>
          <div className="container">
            <h4 className="text">
              Developed by <span>Ram Maheshwari</span>
            </h4>
          </div>
        </footer>
      </div>
    )
  }
}

export default App
