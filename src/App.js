import React, { Component } from 'react'
import './App.scss'

class App extends Component {
  state = {
    rows: [
      {
        name: '',
        val: '',
      },
    ],
    cards: [],
  }

  onRowAdd = () => {
    const rows = JSON.parse(JSON.stringify(this.state.rows))
    let rowObj = { name: '', val: '' }
    rows.push(rowObj)
    this.setState({ rows })
  }

  onRowRemove = (idx) => {
    const rows = JSON.parse(JSON.stringify(this.state.rows))
    const newRows = rows.filter((item, index) => index !== idx)
    this.setState({
      rows: newRows,
    })
  }

  onRowInput = (e, idx) => {
    const rows = JSON.parse(JSON.stringify(this.state.rows))
    rows[idx][e.target.name] = e.target.value
    this.setState({ rows })
  }

  onCardCreate = () => {
    const rows = JSON.parse(JSON.stringify(this.state.rows))
    const cards = JSON.parse(JSON.stringify(this.state.cards))
    const cardData = {}

    cardData.id = Math.floor(Math.random() * 100000000)

    for (let i = 0; i < rows.length; i++) {
      if (rows[i].name.length && rows[i].val.length) {
        cardData[rows[i].name] = rows[i].val
      }
    }
    cards.push(cardData)
    this.setState({
      cards,
    })
  }

  render() {
    const { rows, cards } = this.state
    return (
      <div className="app">
        <nav>.</nav>

        <section className="custom-input">
          <div className="container">
            <div className="content">
              <button className="btn content-btn" onClick={this.onRowAdd}>
                Add Row
              </button>

              {rows.map((item, idx) => {
                return (
                  <div className="single-row" key={idx}>
                    <input
                      className="row-ele row-input-name"
                      placeholder="NAME"
                      value={item.name}
                      name="name"
                      onChange={(e) => this.onRowInput(e, idx)}
                      autoComplete="off"
                      maxLength="25"
                    />
                    <input
                      className="row-ele row-input-val"
                      placeholder="VALUE"
                      value={item.val}
                      name="val"
                      onChange={(e) => this.onRowInput(e, idx)}
                      autoComplete="off"
                      maxLength="25"
                    />
                    <button
                      className="row-ele row-remove"
                      onClick={() => this.onRowRemove(idx)}
                    >
                      X
                    </button>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
        <section className="cards-section">
          <div className="container">
            <button
              className="btn btn-inv cards-btn"
              onClick={this.onCardCreate}
            >
              Creare Card
            </button>
            <div className="cards">
              {cards.map((card, idx) => {
                return (
                  <div className="card" key={idx}>
                    {Object.keys(card).map((key, i) => {
                      return (
                        <div className="field" key={i}>
                          <span className="field-name">{key}</span>
                          <br />
                          <span className="field-value">{card[key]}</span>
                        </div>
                      )
                    })}
                  </div>
                )
              })}
            </div>
          </div>
        </section>
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
