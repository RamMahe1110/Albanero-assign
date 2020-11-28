import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'

class Chart extends Component {
  state = {
    chartData: {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [
        {
          label: 'Patients',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgb(255,255,255)',
          borderColor: 'rgb(255,165,0)',
          borderWidth: 2,
          data: [15, 24, 33, 48, 59],
        },
      ],
    },
  }
  render() {
    return (
      <div className="chart">
        <div className="container">
          <div className="chart-container">
            <Line
              data={this.state.chartData}
              options={{
                title: {
                  display: true,
                  text: 'Covid Patients Per Month in Millions',
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: 'right',
                },
              }}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Chart
