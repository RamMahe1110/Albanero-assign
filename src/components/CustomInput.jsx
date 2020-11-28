import React, { Component } from 'react'

class CustomInput extends Component {
  state = {}
  render() {
    const { rows } = this.props
    return (
      <section className="custom-input">
        <div className="container">
          <div className="content">
            <button className="btn content-btn" onClick={this.props.onRowAdd}>
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
                    onChange={(e) => this.props.onRowInput(e, idx)}
                    autoComplete="off"
                    maxLength="25"
                  />
                  <input
                    className="row-ele row-input-val"
                    placeholder="VALUE"
                    value={item.val}
                    name="val"
                    onChange={(e) => this.props.onRowInput(e, idx)}
                    autoComplete="off"
                    maxLength="25"
                  />
                  <button
                    className="row-ele row-remove"
                    onClick={() => this.props.onRowRemove(idx)}
                  >
                    X
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
}

export default CustomInput
