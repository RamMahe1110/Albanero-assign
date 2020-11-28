import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import './App.scss'
import Home from './pages/Home'
import Chart from './pages/Chart'

class App extends Component {
  render() {
    return (
      <div className="app">
        <nav>
          <div className="container">
            <ul className="links">
              <Link to="/">Home</Link>
              <Link to="/chart">Chart</Link>
            </ul>
          </div>
        </nav>
        <Route path="/" exact={true} component={Home} />
        <Route path="/chart" exact={true} component={Chart} />
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
