import React, { Component } from 'react'

class Cards extends Component {
  state = {}
  render() {
    const { cards, onCardCreate } = this.props
    return (
      <section className="cards-section">
        <div className="container">
          <button className="btn btn-inv cards-btn" onClick={onCardCreate}>
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
    )
  }
}

export default Cards
