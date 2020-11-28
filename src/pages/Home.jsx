import React, { Component } from 'react'
import CustomInput from '../components/CustomInput'
import Cards from '../components/Cards'

class Home extends Component {
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
        <CustomInput
          rows={rows}
          onRowAdd={this.onRowAdd}
          onRowInput={this.onRowInput}
          onRowRemove={this.onRowRemove}
        />
        <Cards cards={cards} onCardCreate={this.onCardCreate} />
      </div>
    )
  }
}

export default Home
