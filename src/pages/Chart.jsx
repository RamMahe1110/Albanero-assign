import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'

class Chart extends Component {
  state = {
    chartData: {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [
        {
          label: 'Rainfall',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgb(255,255,255)',
          borderColor: 'rgb(255,165,0)',
          borderWidth: 2,
          data: [65, 59, 80, 81, 56],
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
                  text: 'Average Rainfall per month',
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
